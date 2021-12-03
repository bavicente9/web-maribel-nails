import SocialMediaButtons from '../../SocialMediaButtons/SocialMediaButtons'
import './ContactInfo.css'
import contactInfo from '../../InfoJSONs/ContactInfo.json'


const ContactInfo = () => {
    return (
        <div className='contactInfoContainer' >
            <h2 className = 'titleHeader'>CONTACTO</h2>
            <div className='contactInfo'>
                <h1 className='info title'>MARIBEL NAILS </h1>
                <div className='info info1'>
                    <div className=''>
                        <h2>VISITANOS</h2>
                        <div className='info__location'>
                            <span id='info__location-icon' />
                            <p >{contactInfo.location}</p>
                        </div>
                    </div>

                    <div className=''>
                        <h2>LLAMANOS O ESCRIBENOS</h2>
                        <div className='info__tlf'>
                            <span id='info__tlf-icon' />
                            <p >{contactInfo.tlf}</p>
                        </div>

                    </div>
                </div>

                <div className='info info2 infoShedule'>
                    <h2>HORARIO</h2>
                    {
                        contactInfo.schedule.map((item, index) => {
                            return (
                                <div className='scheduleInfo' key={index} >
                                    <h3>{item.time}</h3>
                                    <p>{item.hours}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='info socialMedia'>
                    <h2>¡SIGENOS EN REDES!</h2>
                    <SocialMediaButtons />
                </div>

            </div>

        </div>
    )
}

export default ContactInfo;