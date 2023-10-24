import ExibirPost from '../../Componentes/ExibirPost'
import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOcultoLogado from '../../Componentes/MenuOcultoLogado'
import NavVerticalD from '../../Componentes/NavVerticalD'
import DropDown from '../../Componentes/DropDownNot'
           
function Desaparecidos() {
    return(
        <>
            <MenuOcultoLogado />
            <DropDown />
            <HeaderSemLink />
            <div className='tudo'>
                <NavVerticalD />
                <div className='conteudoTudo'>
                    <ExibirPost />
                </div>
            </div>
        </>
    )
}
export default Desaparecidos