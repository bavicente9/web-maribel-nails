
import ButtonAppointment from '../BtnAppointment/ButtonAppointment';
import './Header.css'



const Header = () => {

    //togle to show or hidde the menu
    const handleChangeTogleMenu = (e) => {
        const btnMenuResponsive = document.getElementById('btnResponsiveMenu')
        const navContainer = document.getElementById('responsiveMenu-navContainer')
        const menuOptionsList = document.getElementById('menuOptionsList')
        const iconMenu = btnMenuResponsive.style.backgroundImage

        if (iconMenu === 'url("./images/icons/IconBarMenuOpen.svg")') {
            //change the responsive menu icon between menu bar and a x
            btnMenuResponsive.style.backgroundImage = "url('./images/icons/IconBarMenuClose.png')"
            //show the options with its animation
            navContainer.style.visibility = 'visible'
            menuOptionsList.style.animationName = 'showMenu'
        } else {
            btnMenuResponsive.style.backgroundImage = "url('./images/icons/IconBarMenuOpen.svg')"
            navContainer.style.visibility = 'hidden'
            menuOptionsList.style.animationName = 'hiddeMenu'

        }
    }

    return (
        <header className='header'>
            <div className='whiteDiv' />
            <img id='logoHeader' alt='logo' src='./images/logo.jpg' />

            <div className='nav-container'>

                <ButtonAppointment className='barMenu-btn-Appointment' />

                <a href="#contact">CONTACTO</a>
                <a href="#services">SERVICIOS</a>
                <a href="#home">INICIO</a>

            </div>

            <div className='responsiveMenu'>
                <div className='buttons'>
                    <ButtonAppointment className='barMenu-btn-Appointment' />
                    <button className='btnResponsiveMenu' id='btnResponsiveMenu' style={{ backgroundImage: "url('./images/icons/IconBarMenuOpen.svg')" }} onClick={(e) => handleChangeTogleMenu(e)} />
                </div>
                <div className='nav-container-responsive' id='responsiveMenu-navContainer'>
                    <ul id='menuOptionsList'>
                        <li><a onClick={(e) => handleChangeTogleMenu(e)} href="#home" >INICIO</a></li>
                        <li><a onClick={(e) => handleChangeTogleMenu(e)} href="#services">SERVICIOS</a></li>
                        <li><a onClick={(e) => handleChangeTogleMenu(e)} href="#contact">CONTACTO</a></li>
                    </ul>
                </div>


            </div>
        </header>
    )
}

export default Header;