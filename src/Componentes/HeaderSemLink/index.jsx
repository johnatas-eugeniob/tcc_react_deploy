import '../Header'
import './style.css'
import { BiSolidBell } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import perfilImg from '../../img/doguinho.png'

function fecharNav() {
  document.getElementById("menuOculto").style.width = "300px";
}
function dropDown() {
  document.getElementById("dropDown").style.width = "300px";
  document.getElementById("dropDown").style.height = "";
}

function HeaderSemLink() {
  return (
    <div className="bgSection">
      <section>
        <span style={{ fontSize: '32px', cursor: 'pointer', color: '#fff' }} onClick={() => fecharNav()}>&#9776;</span>
        <h2 id="isologo">Arcanine Pets Helper</h2>
        <img src={logo} alt="logotipo do site" width="120px" height="120px" />
        <div className="nav-item-link">
          <Link to='#' id='dropDowm' onClick={() => dropDown()}>
            <BiSolidBell className='item-sino'/>
          </Link>
        </div>
        <div className='nav-perfil'>
        <Link to='#'> <img 
            src={perfilImg} 
            alt="Imagem de Perfil"
            className='perfil-img'
            /> 
          </Link>
        </div>
      </section>
    </div>
  )
}
export default HeaderSemLink
