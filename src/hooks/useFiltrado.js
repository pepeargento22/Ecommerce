import { useContext } from "react"
import { ContextoFiltros } from "../contexto/filtros"

export function useFiltrado() {
    
    const {filtros, setFiltros} = useContext(ContextoFiltros) 
    
    const aplicarFiltros = (e) => {
        e.preventDefault()
        const nuevosFiltros = {
            categoria: document.querySelector('select').value,
            precioMax: document.querySelector('input').value
        }
        setFiltros(nuevosFiltros)
    }

    const filtrarProductos = (arrayProductos) => {
        return arrayProductos.filter(producto => {
            return (
                ( 
                    filtros.precioMax == 'none' ||
                    filtros.precioMax >= producto.precio
                ) && (
                    filtros.categoria == 'all' ||
                    filtros.categoria == producto.categoria
                )
            )
        })
    }

    return (
        { filtrarProductos, aplicarFiltros}
    )
}

export default useFiltrado