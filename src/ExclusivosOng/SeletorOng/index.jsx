import '../../Componentes/Seletor'
import { Link } from 'react-router-dom';

function SeletorOng() {
    return (
        <div className="seletor">
            <div className="desaparecidos">
                <div className="blurSeletor">
                    <div className="textSeletor">
                        <Link to="/desaparecidos-ong" className='textSeletorLink'>
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
                        <Link to='/stajuda-ong' className='textSeletorLink'>
                            <h1>Precisando de Ajuda</h1>
                            <p>Lorem ipsum dolor sit amet. Et natus necessitatibus aut eligendi eveniet
                                At laborum enim quo obcaecati amet eos nihil consectetur At sint earum. </p>
                            <button>Acessar</button></Link>
                    </div><a name="comoFunciona"></a>
                </div>
            </div>
        </div>
    )
}
export default SeletorOng