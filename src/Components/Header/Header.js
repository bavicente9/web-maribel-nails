
import { Link} from 'react-router-dom';
import ButtonAppointment from '../BtnAppointment/ButtonAppointment';

//This is a solution to React Router's issue of not scrolling to #hash-fragments when using the <Link> component to navigate.
import { HashLink } from 'react-router-hash-link';
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
            <HashLink to ='/#home'> 
            <img id='logoHeader' alt='logo' src='./images/logo.jpg' />
            </HashLink> 

            <div className='nav-container'>

                <ButtonAppointment className='barMenu-btn-Appointment' />

                <Link to="/contact">CONTACTO</Link>

                <HashLink to="/#services">SERVICIOS</HashLink>
                <HashLink to="/#home">INICIO</HashLink>

            </div>

            <div className='responsiveMenu'>
                <div className='buttons'>
                    <ButtonAppointment className='barMenu-btn-Appointment' />
                    <button className='btnResponsiveMenu' id='btnResponsiveMenu' style={{ backgroundImage: "url('./images/icons/IconBarMenuOpen.svg')" }} onClick={(e) => handleChangeTogleMenu(e)} />
                </div>
                <div className='nav-container-responsive' id='responsiveMenu-navContainer'>
                    <ul id='menuOptionsList'>
                        <li><HashLink onClick={(e) => handleChangeTogleMenu(e)} to="/#home" >INICIO</HashLink></li>
                        <li><HashLink onClick={(e) => handleChangeTogleMenu(e)} to="/#services">SERVICIOS</HashLink></li>
                        <li><Link onClick={(e) => handleChangeTogleMenu(e)} to="/contact">CONTACTO</Link></li>
                    </ul>
                </div>


            </div>
        </header>
    )
}

export default Header;