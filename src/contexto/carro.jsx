import { createContext, useReducer, useState, useEffect } from 'react'

export const ContextoCarro = createContext()

const estadoInicial = []
const reducer = (state, action) => {
    
    const { type: actionType, payload: actionPayload } = action

    switch (actionType) {
        
        case 'AGREGAR_AL_CARRO': {
            const productoEnCarritoIndice = state.findIndex(item => { return item.id == actionPayload.id})
            
            if (productoEnCarritoIndice >= 0) {
                const nuevoEstado = structuredClone(state) 
                nuevoEstado[productoEnCarritoIndice].cantidad += 1
                return nuevoEstado 
            } else {
                
                return [
                    ...state,
                    { 
                        ...actionPayload, 
                        cantidad: 1
                    }
                ]
                
                
            }
        }

        case 'QUITAR_DEL_CARRO': {
            const productoEnCarritoIndice = state.findIndex(item => { return item.id == actionPayload.id})
            const nuevoEstado = structuredClone(state)
            nuevoEstado.splice(productoEnCarritoIndice, 1)
            return nuevoEstado
        }

        case 'BAJAR_CANTIDAD_CARRO': {
            const productoEnCarritoIndice = state.findIndex(item => { return item.id == actionPayload.id})
            
            if (actionPayload.cantidad == 1) {
                const nuevoEstado = structuredClone(state)
                nuevoEstado.splice(productoEnCarritoIndice, 1)
                return nuevoEstado
            } else {
                const nuevoEstado = structuredClone(state) 
                nuevoEstado[productoEnCarritoIndice].cantidad -= 1
                return nuevoEstado
            }
        }

        case 'LIMPIAR_CARRO': {
            return estadoInicial
        }
    }
    return state
}

export function CarroProvider({ children }) {
    
    const [state, dispatch] = useReducer(reducer, estadoInicial)

    const agregarAlCarrito = (producto) => dispatch({
        type: 'AGREGAR_AL_CARRO',
        payload: producto
    })

    const quitarDelCarrito = (producto) => dispatch({
      type: 'QUITAR_DEL_CARRO',
      payload: producto  
    })

    const bajarCantidadCarrito = (producto) => dispatch({
        type: 'BAJAR_CANTIDAD_CARRO',
        payload: producto
    })

    const limpiarCarrito = () => dispatch({
        type: 'LIMPIAR_CARRO'
    })

    const [totalCarrito, setTotalCarrito] = useState(0)
    
    useEffect( () => {
        let nuevoTotal = 0
        state.forEach(producto => {
            nuevoTotal += producto.precio * producto.cantidad
        });
        return setTotalCarrito(nuevoTotal)
        
    },[state])

    const cerrarCarrito = () => {
        const checkbox = document.querySelector('.peer')
        return checkbox.checked = false
    }

    return(
        <ContextoCarro.Provider value={{ carrito: state, agregarAlCarrito, quitarDelCarrito, bajarCantidadCarrito, limpiarCarrito, totalCarrito, cerrarCarrito}}>
            {children}
        </ContextoCarro.Provider>
    )
}