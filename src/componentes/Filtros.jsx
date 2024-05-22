import useFiltrado from '../hooks/useFiltrado'
import { useId, useState } from "react"

// eslint-disable-next-line react/prop-types
function ItemCategorias({valor, categoria}) {
    return (
        <option 
            value={valor}>
                {categoria}
        </option>
    )
}

export function Filtros() {
    const [precioMax, setPrecioMax] = useState('1750')

    const cambioRango = (e) => {
        setPrecioMax(e.target.value)
    }

    const {aplicarFiltros} = useFiltrado()
    const precioMaximoFiltro = useId()
    const categoriaFiltro = useId()

    return (
        <form className="flex flex-col md:flex-row justify-center items-center" onSubmit={aplicarFiltros}>
            <div className="md:mx-4 min-w-80 md:min-w-fit text-left">
                <label className="text-base lg:text-lg tracking-wider uppercase" htmlFor={categoriaFiltro}>Categorias: </label>
                <select className="text-sm lg:text-base" id={categoriaFiltro} name={categoriaFiltro} defaultValue='Todas'>
                    <ItemCategorias valor="all" categoria="Todas" />
                    <ItemCategorias valor="laptops" categoria="Laptops" />
                    <ItemCategorias valor="smartphones" categoria="Celulares" />
                    <ItemCategorias valor="home-decoration" categoria="Decoración" />
                    <ItemCategorias valor="fragrances" categoria="Perfumes" />
                    <ItemCategorias valor="skincare" categoria="Skincare" />
                    <ItemCategorias valor="groceries" categoria="Comida" />
                </select>
            </div>
            <div className="md:mx-4 min-w-80 md:min-w-fit text-left">
                <label className="text-base lg:text-lg tracking-wider uppercase" htmlFor={precioMaximoFiltro}>Precio Máximo: </label>
                <input
                className="relative top-1" 
                    type="range"
                    id={precioMaximoFiltro}
                    name={precioMaximoFiltro}
                    min="0"
                    max="1750"
                    step="5"
                    value={precioMax}
                    onChange={cambioRango} 
                />
                <span className="ml-2 text-sm lg:text-base">${precioMax}</span>
            </div>
            <input
                className="px-4 py-2 ml-0 md:ml-4 my-4 md:my-0 rounded-2xl md:text-sm lg:text-base font-bold uppercase cursor-pointer bg-sky-300 hover:bg-sky-500 active:shadow-inner transition-colors duration-300" 
                type="submit" 
                id="submit" 
                value="Filtrar"
            />
        </form>
    )
}

export default Filtros