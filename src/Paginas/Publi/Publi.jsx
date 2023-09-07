import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOcultoLogado from '../../Componentes/MenuOcultoLogado'
import ModalPubli from '../../Componentes/ModalPubli'
import NavVerticalPb from '../../Componentes/NavVerticalPb'
import DropDown from '../../Componentes/DropDownNot'
import '../../App.css'
import './style.css'

function Publi(){
    return(
        <>
            <MenuOcultoLogado />
            <DropDown />
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