import './style.css'
import sobreImg from "../../img/doguinho de oculos.jpg"

function Sobre() {
    return (
        <div className="sobre"><a name="Sobre"></a>
            <div className="conteudoSobre">
                <h1>Sobre Nós</h1>
                <p>Lorem ipsum dolor sit amet. Et natus necessitatibus aut eligendi eveniet
                    At laborum enim quo obcaecati amet eos nihil consectetur At sint earum.
                    Et veniam eaque est praesentium voluptatum sed nisi perferendis. Non dolor exercitationem est ipsa laboriosam id dolorem possimus.<br /><br />
                    Hic exercitationem enim est iure omnis sed accusamus dicta! Et perferendis itaque ad maxime magnam aut quia odio.
                    Eos consequuntur nihil vel nisi ullam non soluta corporis et iste pariatur aut esse repudiandae ut quia iste in accusamus culpa!
                    A cupiditate cupiditate aut beatae praesentium est porro culpa non ipsam fuga eos accusamus maiores.
                </p>
            </div>
            <div className="imgSobre">
                <img src={sobreImg} alt="Cachorro de Óculos" />
            </div>
        </div>
    )
}
export default Sobre