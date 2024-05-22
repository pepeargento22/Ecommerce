import { useId } from 'react'
import useCarrito from '../hooks/useCarrito'
import logoCarrito from '../assets/logoCarrito.svg'
import cross from '../assets/cross.svg'
import trashcan from '../assets/trashcan.svg'

function ItemCarrito({ imagen, precio, titulo, cantidad, agregar, quitar, bajar}) {

    const formatterProducto = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    })

    return (
        <li className="w-auto h-36 flex flex-row justify-between items-center gap-2 sm:gap-4 my-4 sm:my-10 mx-2 text-gray-700 bg-inherit">
            <div className="w-10">
                <button className="cursor-pointer" onClick={quitar}>
                    <img className="w-6 h-6 relative m-auto" src={trashcan} alt="eliminar producto" />
                </button>
            </div>
            <div className="w-24 sm:w-36">
                    <img className="w-full h-24 sm:h-36 border-2 border-solid border-gray-700 rounded-md object-cover" src={imagen} alt={titulo} />
            </div>
            <div className="w-36 h-28 sm:h-36 flex flex-col justify-between overflow-x-hidden">
                    <div className="flex flex-col justify-start">
                        <span className="mb-2 font-bold text-xs md:text-sm capitalize">{titulo}</span>
                        <span className="mb-2 font-bold text-base">{formatterProducto.format(precio)}</span>
                    </div>
                    <div className=" flex justify-between items-center">
                        <button className="px-2 border-2 border-solid border-gray-700 rounded-full text-lg font-bold hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer" onClick={bajar}>−</button>
                        <span>{cantidad}</span>
                        <button className="px-2 border-2 border-solid border-gray-700 rounded-full text-lg font-bold hover:text-white hover:bg-black transition-colors duration-300 cursor-pointer" onClick={agregar}>+</button>
                    </div>
            </div>
        </li>
    )
}

function CarritoVacio() {
    return (
        <div className="sm:min-w-48 h-4/5 text-lg sm:text-xl flex items-center justify-center overflow-x-hidden">
            <p>El carrito está vacío.</p>
        </div>
    )
}

function CarritoConProductos({ carrito, precioTotal, agregar, quitar, bajar }) {

    
    const formatterTotal = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    })

    return (
        <>
        <div className='min-w-72 sm:min-w-80'>
            <ul className='productos-carrito border-b border-solid border-gray-300 max-h-100 overflow-y-auto'>
                { 
                    carrito.map(producto => (
                        <ItemCarrito 
                            key = {producto.id}
                            agregar = {() => { agregar(producto)}}
                            bajar = {() => { bajar(producto)}}
                            quitar = {() => { quitar(producto)}} 
                            {...producto} 
                        /> 
                    )) 
                }
            </ul>
        </div>
        <div className="mx-8 mt-4">
            <div className="flex justify-between font-bold pb-2 mb-4 border-b border-solid border-gray-300">
                <span>Total</span>
                <span>{formatterTotal.format(precioTotal)}</span>
            </div>
            <button className="px-2 py-1 mx-auto w-1/2 block rounded-2xl font-bold capitalize cursor-pointer bg-sky-300 hover:bg-sky-500 active:shadow-inner transition-colors duration-300 overflow-x-hidden">Comprar</button>
        </div>
        </>
    )
}

export function Carrito() {
    const IdCarroCheckbox = useId()
    const { carrito, limpiarCarrito, agregarAlCarrito, quitarDelCarrito, bajarCantidadCarrito, totalCarrito, cerrarCarrito } = useCarrito()

    const estaVacio = !carrito.length > 0

    return (
        <section className="carrito">
            <label className="w-20 md:w-40 m-1 fixed top-5 right-2 sm:right-8 cursor-pointer transition-colors duration-300 rounded-2xl bg-slate-400 hover:bg-slate-600 hover:text-white hover:border-white active:shadow-inner active:shadow-black overflow-hidden z-10" htmlFor={IdCarroCheckbox}>
                <div className="flex justify-center md:justify-around items-center my-1 flex-nowrap ">
                    <img className="w-10 inline-block mr-2 md:mr-0" src={logoCarrito} alt="logo de carrito de supermercado" />
                    <span className="absolute top-0 left-10 py-1 px-2 text-xs font-light rounded-full bg-sky-300">{carrito.length}</span>
                    <span className="hidden md:inline capitalize">Mi carrito</span>
                </div>
            </label>
            <input
                className="peer" 
                id={IdCarroCheckbox} 
                type="checkbox" 
                hidden 
            />
            <div className="pantallaBloqueo hidden peer-checked:block fixed top-0 w-full h-screen opacity-40 bg-blue-900 z-20">

            </div>
            <aside className="fixed top-0 right-0 w-0 peer-checked:w-4/5 sm:peer-checked:w-1/2 md:peer-checked:w-2/5 lg:peer-checked:w-1/3 h-full overflow-x-hidden transition-all duration-300 bg-gray-50 z-30">
                <div className="w-full flex justify-around py-4 px-2 border-b border-solid border-gray-300">
                    <h3 className="hidden sm:block min-w-28 mt-2 text-left text-2xl capitalize overflow-x-hidden">Mi carrito</h3>
                    <button className="px-2 py-1 cursor-pointer" onClick={limpiarCarrito}>
                        <img className="w-7 h-7 bg-inherit" src={trashcan} alt="limpiar carrito" />
                    </button>
                    <button className="px-2 py-1 cursor-pointer" onClick={cerrarCarrito}>
                        <img className="w-10 h-10" src={cross} alt="cerrar carrito" />
                    </button>
                </div>
                {
                    estaVacio ?  
                        <CarritoVacio /> :   
                        <CarritoConProductos
                            carrito = { carrito }
                            precioTotal = { totalCarrito }
                            agregar = {agregarAlCarrito}
                            bajar = {bajarCantidadCarrito}
                            quitar = {quitarDelCarrito}
                        />
                }
            </aside>
        </section>
    )
}

export default Carrito