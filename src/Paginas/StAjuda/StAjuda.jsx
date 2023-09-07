import ExibirPost from '../../Componentes/ExibirPost'
import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOcultoLogado from '../../Componentes/MenuOcultoLogado'
import NavVerticalSt from '../../Componentes/NavVerticalSt'
import VerPost from '../../Componentes/VerPost'
import DropDown from '../../Componentes/DropDownNot'
import './style.css'
           
function StAjuda() {
    return(
        <>
            <MenuOcultoLogado />
            <DropDown />
            <HeaderSemLink />
            <div className='tudo'>
                <NavVerticalSt />
                <div className='conteudoTudo'>
                    <ExibirPost />
                    <VerPost />
                </div>
            </div>
        </>
    )
}
export default StAjuda