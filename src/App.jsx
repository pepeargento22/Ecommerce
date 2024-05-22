import { useProductos } from './hooks/useProductos.js'
import { useFiltrado } from './hooks/useFiltrado.js'
import { Productos } from './componentes/Productos.jsx'
import { Header } from './componentes/Header.jsx'
import { Carrito } from './componentes/Carrito.jsx'
import { CarroProvider } from './contexto/carro'

function App() {

  const { listado_productos } = useProductos() 

  const { filtrarProductos } = useFiltrado() 

  const productosFiltrados = filtrarProductos(listado_productos)

  return (
    <CarroProvider>
      <Header/>
      <Carrito />
      <Productos productos_finales={ productosFiltrados }/>
    </CarroProvider>
  )
}

export default App
