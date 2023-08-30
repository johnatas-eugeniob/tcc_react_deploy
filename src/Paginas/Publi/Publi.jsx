import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOculto from '../../Componentes/MenuOculto'
import ModalPubli from '../../Componentes/ModalPubli'
import NavVerticalPb from '../../Componentes/NavVerticalPb'
import '../../App.css'
import './style.css'

function Publi(){
    return(
        <>
            <MenuOculto />
            <HeaderSemLink />
            <div className='tudo'>
                <NavVerticalPb />
                <div className='background'>
                    <ModalPubli />
                </div>
            </div>
        </>
    )
}
export default Publi