
import ButtonAppointment from '../BtnAppointment/ButtonAppointment';
import './Header.css'

//TODO: nav

const Header = () => {
    return (
        <header id='header'>
            <div id='logo'>
                <img alt='logo' src='./images/logo.jpg' />

            </div>
            <div className='nav-container'>

                <ButtonAppointment className='barMenu-btn-Appointment' />
                
                <a href="">CONTACTO</a>
                <a href="">SERVICIOS</a>
                <a href="">INICIO</a>
                 
            </div>
        </header>
    )
}

export default Header;