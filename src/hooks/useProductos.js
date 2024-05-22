import { useState, useEffect } from "react"

export function useProductos() {

    const [ productos , setProductos ] = useState([])    
    
    const listado_productos = productos?.map(prod => ({
      id: prod.id,
      titulo: prod.title,
      descripcion: prod.description,
      categoria: prod.category,
      precio: prod.price,
      imagen: prod.images[0]
    }))

    const obtenerProductos = () => {
      fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(obj_productos => {
          const array_productos = obj_productos.products
          return Promise.resolve(setProductos(array_productos))
        })
    }

    useEffect(obtenerProductos,[]) 

    return (
      {listado_productos}
    )
  }

export default useProductos