import '../../Componentes/NavVerticalD/style.css'
import { useState } from 'react'
import { IoIosHome } from "react-icons/io"
import { MdPets } from "react-icons/md"
import { BsFillCursorFill } from "react-icons/bs"
import { Link } from 'react-router-dom';
import { BiSolidBell } from 'react-icons/bi'
import ModalForNot from '../../Componentes/ModalForNot'
import ModalNotOng from '../DropDownNotOng'

function NavVerticalOngD() {
    const [openModalNot, setOpenModalNot] = useState(null);
    return( 
    <>           
        <div className="navVertical">
            <Link to="/dashboard-ong" className='iconeNavVertical'><IoIosHome /> Home</Link>
            <hr />
            <Link to="/desaparecidos-ong" className='iconeNavVertical' id='iconePageD'><BsFillCursorFill /> Desaparecidos</Link>
            <Link to="/stajuda-ong" className='iconeNavVertical'><MdPets /> Sitação de Ajuda</Link>
            <button onClick={() => setOpenModalNot(true)} id='dropDowm' className='iconeNavVertical'>
                <BiSolidBell/> Notificações
            </button> 
        </div>
        <ModalForNot isOpen={openModalNot} setModalOpenNot={() => setOpenModalNot(!openModalNot)}>
          <ModalNotOng />
        </ModalForNot>
    </>
    );
}
export default NavVerticalOngD