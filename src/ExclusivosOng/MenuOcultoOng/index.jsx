import '../../Componentes/MenuOcultoLogado/style.css'
import { IoIosHome } from "react-icons/io"
import { BsFillCursorFill } from "react-icons/bs"
import { MdPets } from "react-icons/md"
import { Link } from 'react-router-dom';
import { BiLogIn } from "react-icons/bi"
import { handleLogout } from '../../routes/logout';

function MenuOcultoLogadoOng() {
    return(
        <aside id='menuOcultoOng' className='menuOculto'>
            <div className="btnFechar" onClick={() => abrirNav()}>&times;</div>
            <Link to="/dashboard-ong"><IoIosHome /> Home</Link>
            <Link to="/desaparecidos-ong"><BsFillCursorFill /> Desaparecidos</Link>
            <Link to="/stajuda-ong"><MdPets /> Situações de Ajuda</Link>
            <button onClick={handleLogout}><BiLogIn /> Sair</button>
      </aside>
    )
}
function abrirNav() {
    document.getElementById("menuOcultoOng").style.width = "0";
}
export default MenuOcultoLogadoOng