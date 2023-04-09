import './Footer.css'
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons";
import contactInfo from '../../configs/InfoJSONs/ContactInfo.json'

function Footer() {
    return (
        <footer className='footer'>
            <div className='whiteDiv' />
            <div className='footerContainer'>

                <div className='logoAndSocialMediaContainer'>
                    <img alt='' src='./images/logo.jpg' />
                </div>
                <SocialMediaButtons className='footerSocialMedia' />
                <div className='info1'>
                    <p><b>Tlf:</b>{contactInfo.tlf}</p>
                    <p><b>Dirección:</b>{contactInfo.location}</p>
                </div>
            </div>
            <div className='translucidLayer' />
        </footer>
    )
}

export default Footer;