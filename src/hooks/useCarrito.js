import { useContext } from 'react'
import { ContextoCarro } from '../contexto/carro'

export function useCarrito() {
    const contexto = useContext(ContextoCarro)

    return contexto
} 

export default useCarrito