import './style.css'
import { Link } from 'react-router-dom';
import imgPerfil from "../../img/doguinho.png"

function dropDownClose() {
    document.getElementById("dropDown").style.height = "0";
    document.getElementById("dropDown").style.width = "0";
}

function DropDown() {
    return(
        <aside id='dropDown' className='dropDown'>
            <div className="btnFecharDrop" onClick={() => dropDownClose()}>&times;</div>
            <Link className='not-container'>
                <p>
                    <img 
                        src={imgPerfil} alt="ft de perfil" className='img-perfil'
                    />
                    Rubens curtiu seu post
                </p>
            </Link>
            <Link className='not-container'>
                <p>
                    <img 
                        src={imgPerfil} alt="ft de perfil" className='img-perfil'
                    />
                    Rubens curtiu seu post
                </p>
            </Link>
            <Link className='not-container'>
                <p>
                    <img 
                        src={imgPerfil} alt="ft de perfil" className='img-perfil'
                    />
                    Rubens curtiu seu post
                </p>
            </Link>
            <Link className='not-container'>
                <p>
                    <img 
                        src={imgPerfil} alt="ft de perfil" className='img-perfil'
                    />
                    Rubens curtiu seu post
                </p>
            </Link>
            <Link className='not-container'>
                <p>
                    <img 
                        src={imgPerfil} alt="ft de perfil" className='img-perfil'
                    />
                    Rubens curtiu seu post
                </p>
            </Link>
            <Link className='not-container'>
                <p>
                    <img 
                        src={imgPerfil} alt="ft de perfil" className='img-perfil'
                    />
                    Rubens curtiu seu post
                </p>
            </Link>
      </aside>
    )
}
export default DropDown