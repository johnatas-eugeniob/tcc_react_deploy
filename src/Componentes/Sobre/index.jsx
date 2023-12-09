import './style.css'
import sobreImg from "../../img/doguinho de oculos.jpg"

function Sobre() {
    return (
        <div className="sobre"><a name="Sobre"></a>
            <div className="conteudoSobre">
                <h1>Sobre Nós</h1>
                <p>No coração da missão da AC Pets Helper está o compromisso inabalável com o 
                    bem-estar dos animais e a construção de um mundo onde cada ser vivo receba 
                    o cuidado e o amor que merece. Como uma empresa inovadora, a AC Pets Helper 
                    tem a nobre missão de apoiar organizações não governamentais (ONGs) dedicadas 
                    aos animais, ajudando-as a identificar e resolver uma variedade de problemas 
                    que afetam nossos amigos de quatro patas.
                </p>
            </div>
            <div className="imgSobre">
                <img src={sobreImg} alt="Cachorro de Óculos" />
            </div>
        </div>
    )
}
export default Sobre