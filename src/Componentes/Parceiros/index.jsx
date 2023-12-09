import './style.css'
import issackImg from '../../img/logo1.png'
import xolapç from '../../img/diomaps.png'
import eddybank from '../../img/nexus.png'

function Parceiros(){
    return(
        <div className="parceiros">
        <div className="conteudoParceiros">
            <h1>Parceiros</h1>
            <div className='parceiros-itens'>
                <div className='parceiros-img'>
                    <img src={issackImg} alt="" width={150} height={150}/>
                </div>
                <div className='parceiros-img'>
                    <img src={xolapç} alt="" width={150} height={150}/>
                </div>
                <div className='parceiros-img'>
                    <img src={eddybank} alt="" width={200} height={150}/>
                </div>
            </div>
        </div>

    </div>
    )
}
export default Parceiros