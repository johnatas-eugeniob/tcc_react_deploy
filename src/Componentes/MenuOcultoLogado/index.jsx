import './style.css'
import { IoIosHome } from "react-icons/io"
import { BsFillCursorFill } from "react-icons/bs"
import { MdPets } from "react-icons/md"
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi"
import { handleLogout } from '../../routes/logout';

function MenuOcultoLogado() {
    return(
        <aside id='menuOculto' className='menuOculto'>
            <div className="btnFechar" onClick={() => abrirNav()}>&times;</div>
            <Link to="/dashboard"><IoIosHome /> Home</Link>
            <Link to="/desaparecidos"><BsFillCursorFill /> Desaparecidos</Link>
            <Link to="/stajuda"><MdPets /> Situações de Ajuda</Link>
            <button onClick={handleLogout}><BiLogIn /> Sair</button>
      </aside>
    )
}
function abrirNav() {
    document.getElementById("menuOculto").style.width = "0";
}
export default MenuOcultoLogado