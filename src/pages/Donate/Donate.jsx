import HeaderSemLink from '../../Componentes/HeaderSemLink'
import MenuOcultoLogado from '../../Componentes/MenuOcultoLogado'
import ContentDonate from '../../Componentes/DonateContent'
import DropDown from '../../Componentes/DropDownNot'
           
function Donate() {
    return(
        <body>
            <MenuOcultoLogado />
            <DropDown />
            <HeaderSemLink />
            <ContentDonate />
        </body>
    )
}
export default Donate