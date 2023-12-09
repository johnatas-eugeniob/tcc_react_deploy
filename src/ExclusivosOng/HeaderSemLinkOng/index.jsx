import { OngProvider } from '../Context';
import '../../Componentes/HeaderSemLink/style.css';
import HeaderSemLinkContentOng from '../HeaderSLinkOngContext';

function HeaderSemLinkOng() {
  return (
    <OngProvider>
      <HeaderSemLinkContentOng />
    </OngProvider>
  );
}

export default HeaderSemLinkOng;
