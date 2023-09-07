import './style.css'
import { IoIosHome } from "react-icons/io"
import { BiDonateHeart } from "react-icons/bi"
import { BsFillCursorFill } from "react-icons/bs"
import { MdPets } from "react-icons/md"
import { Link } from 'react-router-dom';

function MenuOcultoLogado() {
    return(
        <aside id='menuOculto' className='menuOculto'>
            <div className="btnFechar" onClick={() => abrirNav()}>&times;</div>
            <Link to="/dashboard"><IoIosHome /> Home</Link>
            <Link to="/donate"><BiDonateHeart /> Doações</Link>
            <Link to="/desaparecidos"><BsFillCursorFill /> Desaparecidos</Link>
            <Link to="/stajuda"><MdPets /> Situações de Ajuda</Link>
      </aside>
    )
}
function abrirNav() {
    document.getElementById("menuOculto").style.width = "0";
}
export default MenuOcultoLogado