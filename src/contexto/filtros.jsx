/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const ContextoFiltros = createContext()

export function FiltrosProvider({ children }) {
    const [filtros, setFiltros ] = useState({
        categoria: 'all',
        precioMax: '1750'
    })
    return (
        <ContextoFiltros.Provider value= {{
            filtros,
            setFiltros
        }}
        >
            {children}
        </ContextoFiltros.Provider>
    )
}