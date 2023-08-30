import './style.css'
import pixImage from '../../img/pix-106.svg'
import boletoImage from '../../img/boleto-barcode.svg'

function ContentDonate() {
    return(
        <div className='tudoDoacoes'>
            <div className='contentDoacoes'>
                <div className='doacoesText'>
                    <div className="pix"><img src={pixImage} alt="Pix"/></div>
                    <h3>PIX</h3>
                    <p>Para fazer pagamentos no pix clique aqui.</p>
                </div>

                <div className="doacoesText">
                <div className="boleto"><img src={boletoImage} alt=""/></div>
                <h3>Boletos aqui</h3>
                <p>Para fazer um boleto clique aqui.</p>
            </div>
            </div>
        </div>
    )
}
export default ContentDonate