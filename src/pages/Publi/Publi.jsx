import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOcultoLogado from '../../Componentes/MenuOcultoLogado'
import ModalPubli from '../../Componentes/ModalPubli'
import NavVerticalPb from '../../Componentes/NavVerticalPb'
import '../../App.css'
import './style.css'

function Publi(){
    return(
        <>
            <MenuOcultoLogado />
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