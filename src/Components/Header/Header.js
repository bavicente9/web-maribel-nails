import './Header.css'



const Header = () => {
    return (
        <header id='header'>
            <div id='logo'>
                <img alt='logo' src='./images/logo.jpg' />

            </div>
            <div className='nav-container'>
                <a href="" id ='btn-appointment'>Reservar cita</a>
                <a href="">Contacto</a>
                <a href="">Servicios</a>
                <a href="">Inicio</a>
            </div>
        </header>
    )
}

export default Header;