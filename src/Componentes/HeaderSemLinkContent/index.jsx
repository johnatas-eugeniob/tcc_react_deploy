import { useState } from 'react';
import { useUser } from '../Context';
import logo from '../../img/logo.svg';
import ModalPerfil from '../ModalPerfil';
import ExibirPerfil from '../Perfil';

function fecharNav() {
  document.getElementById("menuOculto").style.width = "300px";
}

function HeaderSemLinkContent() {
  const { nome, imagem } = useUser();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bgSection">
      <section>
        <span style={{ fontSize: '32px', cursor: 'pointer', color: '#fff' }} onClick={() => fecharNav()}>&#9776;</span>
        <h2 id="isologo">Arcanine Pets Helper</h2>
        <img src={logo} alt="logotipo do site" width="120px" height="120px" />
        <div className='nav-perfil'>
          <h2>{nome}</h2>
          <button className='modal-button-perfil-ong' onClick={() => setOpenModal(true)}>
            <img
              src={imagem} 
              alt="P-img"
              className='perfil-img'
            />
          </button>
        </div>
      </section>
      <ModalPerfil isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        {/**Children */}
        <ExibirPerfil />
      </ModalPerfil>
    </div>
  );
}

export default HeaderSemLinkContent;
