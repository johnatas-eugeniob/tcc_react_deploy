import HeaderSemLinkOng from '../../ExclusivosOng/HeaderSemLinkOng'
import MenuOcultoLogadoOng from '../../ExclusivosOng/MenuOcultoOng'
import ExibirPerfilOng from '../../Componentes/PerfilOng'

export default function PerfilOng() {
    return(
        <>
            <HeaderSemLinkOng />
            <MenuOcultoLogadoOng />
            <HeaderSemLinkOng />
            <div className='tudo-perfil'>
                <ExibirPerfilOng />
            </div>
        </>
    )
}



