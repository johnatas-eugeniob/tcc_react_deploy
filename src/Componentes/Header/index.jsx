import './style.css'
import logo from '../../img/logo.svg'

function fecharNav() {
  document.getElementById("menuOculto").style.width = "250px";
  document.getElementById("principal").style.width = "250px";
}

function Header() {
  return (
    <div className="bgSection">
      <section>
        <span style={{ fontSize: '32px', cursor: 'pointer', color: '#fff' }} onClick={() => fecharNav()}>&#9776;</span>
        <h2 id="isologo">Arcanine Pets Helper</h2>
        <img src={logo} alt="logotipo do site" width="120px" height="120px" />
        <div className="nav-item">
          <a href="#Sobre">Sobre nós</a>
          <a href="#comoFunciona">Como Funciona</a>
          <a href="#Parceiros">Parceiros</a>
        </div>
      </section>
    </div>
  )
}
export default Header