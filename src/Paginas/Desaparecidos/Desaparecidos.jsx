import ExibirPost from '../../Componentes/ExibirPost'
import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOculto from '../../Componentes/MenuOculto'
import NavVerticalD from '../../Componentes/NavVerticalD'
import VerPost from '../../Componentes/VerPost'
import DropDown from '../../Componentes/DropDownNot'
           
function Desaparecidos() {
    return(
        <>
            <MenuOculto />
            <DropDown />
            <HeaderSemLink />
            <div className='tudo'>
                <NavVerticalD />
                <div className='conteudoTudo'>
                    <ExibirPost />
                    <VerPost />
                </div>
            </div>
        </>
    )
}
export default Desaparecidos