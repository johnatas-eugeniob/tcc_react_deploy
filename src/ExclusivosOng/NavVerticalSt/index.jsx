import '../../Componentes/NavVerticalSt'
import { useState } from 'react'
import { IoIosHome } from "react-icons/io"
import { MdPets } from "react-icons/md"
import { BsFillCursorFill } from "react-icons/bs"
import { BiSolidBell } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import ModalForNot from '../../Componentes/ModalForNot'
import ModalNotOng from '../DropDownNotOng'

function NavVerticalOngSt() {
    const [openModalNot, setOpenModalNot] = useState(null);
    return(
        <>
            <div className="navVertical">
                <Link to="/dashboard-ong" className='iconeNavVertical'><IoIosHome /> Home</Link>
                <hr />
                <Link to="/desaparecidos-ong" className='iconeNavVertical'><BsFillCursorFill /> Desaparecidos</Link>
                <Link to="/stajuda-ong" className='iconeNavVertical' id='iconePageSt'><MdPets /> Sitação de Ajuda</Link>
                <button onClick={() => setOpenModalNot(true)} id='dropDowm' className='iconeNavVertical'>
                <BiSolidBell/> Notificações
            </button> 
            </div>
            <ModalForNot isOpen={openModalNot} setModalOpenNot={() => setOpenModalNot(!openModalNot)}>
                <ModalNotOng />
            </ModalForNot>
        </>
    )
}
export default NavVerticalOngSt