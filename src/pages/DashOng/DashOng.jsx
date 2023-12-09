import HeaderOng from '../../ExclusivosOng/HeaderOng';
import Carrossel from '../../Componentes/Carrossel';
import Sobre from '../../Componentes/Sobre';
import SeletorOng from '../../Componentes/Seletor';
import ComoFunciona from '../../Componentes/ComoFunciona';
import Parceiros from '../../Componentes/Parceiros';
import Rodape from '../../Componentes/Rodape';
import MenuOcultoOng from '../../ExclusivosOng/MenuOcultoOng';
import '../../App.css';


function DashboardOng() {
  return (
    <>
      <MenuOcultoOng/>
      <HeaderOng/>
      <Carrossel></Carrossel>
      <Sobre/>
      <SeletorOng/>
      <ComoFunciona/>
      <Parceiros/>
      <Rodape/>
    </>
  );
}
export default DashboardOng;

