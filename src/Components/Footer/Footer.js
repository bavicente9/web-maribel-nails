import './Footer.css'
import SocialMediaButtons from "../SocialMediaButtons/SocialMediaButtons";
import contactInfo from '../InfoJSONs/ContactInfo.json'

function Footer() {
    return (
        <div className='footer'>
            <div className = 'whiteDiv' />
            <div className='footerContainer'>

                <div className='logoAndSocialMediaContainer'>
                    <img alt='logo' src='./images/logo.jpg' />
                    <SocialMediaButtons />
                </div>
                <div className='info1'>
                    <p><b>Tlf:</b>{contactInfo.tlf}</p>
                    <p><b>Dirección:</b>{contactInfo.location}</p>
                    <p><b>Email:</b>{contactInfo.email}</p>

                </div>
                <div className='info2'>
                    <p><b>Horario:</b></p>
                    <div className = 'schedule'>
                    {
                        contactInfo.schedule.map((item, index) => {
                            return (
                                <div className='scheduleInfo' key={index} >
                                    <p><b>{item.time} :</b></p>
                                    <p>{item.hours}</p>
                                </div>
                            )
                        })
                    }
                    </div>

                </div>
            </div>
            <div className = 'translucidLayer'/>
        </div>
    )
}

export default Footer;