import './style.css'
import { IoIosHome } from "react-icons/io"
import { BiDonateHeart } from "react-icons/bi"
import { MdPets } from "react-icons/md"
import { BsFillCursorFill } from "react-icons/bs"
import { FaRegBookmark } from "react-icons/fa"
import { AiFillFileAdd } from "react-icons/ai"
import { Link } from 'react-router-dom';

function NavVerticalD() {
    return(            
        <div className="navVertical">
            <Link to="/" className='iconeNavVertical'><IoIosHome /> Home</Link>
            <Link to="#" className='iconeNavVertical'><FaRegBookmark /> Favoritos</Link>
            <hr />
            <Link to="/publi" className='iconeNavVertical'><AiFillFileAdd /> Faça um post</Link>
            <Link to="/desaparecidos" className='iconeNavVertical' id='iconePageD'><BsFillCursorFill /> Desaparecidos</Link>
            <Link to="/donate" className='iconeNavVertical'><BiDonateHeart /> Faça uma doação</Link>
            <Link to="/stajuda" className='iconeNavVertical'><MdPets /> Sitação de Ajuda</Link> 
        </div>
    );
}
export default NavVerticalD