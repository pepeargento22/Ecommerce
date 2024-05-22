import useCarrito from '../hooks/useCarrito'

export function Productos({ productos_finales }) {

    const { agregarAlCarrito } = useCarrito() 
    
    
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits: 0
    })


    return (
        <main className="productos">
            <ul className="list-none grid grid-cols-auto gap-2 mt-4 mx-2">
                {
                    productos_finales.map( producto => (
                        <li className="flex flex-col justify-center items-center py-4 border-2 border-solid border-gray-300 rounded-lg" key={producto.id}>
                            <div className="w-full h-52">
                                <img className="w-96 h-52 m-auto object-contain" src={producto.imagen} alt={producto.titulo} />
                            </div>
                            <h3 className="w-4/5 mb-1 mt-2 pt-2 border-t-2 border-solid border-gray-300 text-sm font-bold text-black uppercase">{producto.titulo}</h3>
                            <p className="w-4/5 min-h-28 mb-8 text-sm text-gray-600">{producto.descripcion}</p>
                            <span className="w-4/5 mb-4 text-xl font-bold">{formatter.format(producto.precio)}</span>
                            <button className="w-4/5 py-4 mt-4 rounded-2xl text-center text-base font-bold uppercase cursor-pointer bg-sky-300 hover:bg-sky-500 active:shadow-inner transition-colors duration-300" onClick= {() => agregarAlCarrito(producto)}>Agregar</button>
                        </li>   
                    ))
                }
            </ul>
        </main>
    )
}

export default Productos