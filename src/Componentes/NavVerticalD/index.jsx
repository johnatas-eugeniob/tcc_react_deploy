import './style.css'
import { useState } from 'react'
import { IoIosHome } from "react-icons/io"
import { MdPets } from "react-icons/md"
import { BsFillCursorFill } from "react-icons/bs"
//import { FaRegBookmark } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { BiSolidBell } from 'react-icons/bi'
import { AiFillFileAdd } from "react-icons/ai"
import ModalForPubli from '../ModalForPubli'
import ModalPubli from '../ModalPubli'
import ModalForNot from '../ModalForNot'
import ModalNot from '../DropDownNot'

function NavVerticalOngD() {
  const [openModalNot, setOpenModalNot] = useState(null);
  const [openModal, setOpenModal] = useState(false)
    return( 
      <>         
        <div className="navVertical">
            <Link to="/dashboard" className='iconeNavVertical'><IoIosHome /> Home</Link>
            <Link to="/meus-posts" className='iconeNavVertical'><AiFillFileAdd /> Meus Posts</Link>
            <hr />
            <button className='iconeNavVertical' onClick={() => setOpenModal(true)}>
              <AiFillFileAdd /> Faça um post
            </button>
            <Link to="/desaparecidos" className='iconeNavVertical' id='iconePageD'><BsFillCursorFill /> Desaparecidos</Link>
            <Link to="/stajuda" className='iconeNavVertical'><MdPets /> Sitação de Ajuda</Link>
            <button onClick={() => setOpenModalNot(true)} id='dropDowm' className='iconeNavVertical'>
                <BiSolidBell/> Notificações
            </button> 
        </div>
        <ModalForPubli isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <ModalPubli />
        </ModalForPubli>

        <ModalForNot isOpen={openModalNot} setModalOpenNot={() => setOpenModalNot(!openModalNot)}>
          <ModalNot />
        </ModalForNot>

      </>  
    );
}
export default NavVerticalOngD