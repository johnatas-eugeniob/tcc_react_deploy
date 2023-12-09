import './style.css'
import { Link } from 'react-router-dom';

function Seletor() {
    return (
        <div className="seletor">
            <div className="desaparecidos">
                <div className="blurSeletor">
                    <div className="textSeletor">
                        <Link to="/desaparecidos" className='textSeletorLink'>
                            <h1>Desaparecidos</h1>
                            <p>Página dedicada a animais desaparecidos. clique aqui para descobrir mais. </p>
                            <button>Acessar</button></Link>
                    </div>
                </div>
            </div>
            <div className="sitAjuda">
                <div className="blurSeletor">
                    <div className="textSeletor">
                        <Link to='/stajuda' className='textSeletorLink'>
                            <h1>Precisando de Ajuda</h1>
                            <p>Precisa de ajuda? clique aqui para fazer um post e receber assistencia de outros usuários. </p>
                            <button>Acessar</button></Link>
                    </div><a name="comoFunciona"></a>
                </div>
            </div>
        </div>
    )
}
export default Seletor