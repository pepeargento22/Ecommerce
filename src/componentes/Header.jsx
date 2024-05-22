import Filtros from './Filtros.jsx'
import sol from '../assets/sol.png'

function Titulo() {

    return(
        <>
        <div className="flex justify-around items-center w-3/4">
            <img className="w-14 md:w-20 my-4 ml-2 lg:ml-4" src={sol} alt="logo Costa del Sol" />
            <h1 className="mb-2 text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide font-extrabold">Costa del Sol</h1>
        </div>
        </>
    )
}

export function Header() {

    return (
        <header className="w-full pb-2 sticky top-0 text-center shadow-lg bg-white">
            <Titulo />
            <Filtros />
        </header>
    )
}

export default Header