import ExibirPost from '../../Componentes/ExibirPost'
import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOculto from '../../Componentes/MenuOculto'
import NavVerticalSt from '../../Componentes/NavVerticalSt'
import VerPost from '../../Componentes/VerPost'
import './style.css'
           
function StAjuda() {
    return(
        <>
            <MenuOculto />
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