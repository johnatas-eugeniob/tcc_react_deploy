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
                            <p>Lorem ipsum dolor sit amet. Et natus necessitatibus aut eligendi eveniet
                                At laborum enim quo obcaecati amet eos nihil consectetur At sint earum. </p>
                            <button>Acessar</button></Link>
                    </div>
                </div>
            </div>
            <div className="sitAjuda">
                <div className="blurSeletor">
                    <div className="textSeletor">
                        <a href="Pagina_St_Ajuda.html" className='textSeletorLink'>
                            <h1>Precisando de Ajuda</h1>
                            <p>Lorem ipsum dolor sit amet. Et natus necessitatibus aut eligendi eveniet
                                At laborum enim quo obcaecati amet eos nihil consectetur At sint earum. </p>
                            <button>Acessar</button></a>
                    </div><a name="comoFunciona"></a>
                </div>
            </div>
        </div>
    )
}
export default Seletor