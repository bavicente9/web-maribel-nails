import './SocialMediaButtons.css'
import contactInfo from '../../configs/InfoJSONs/ContactInfo.json'

const socialMediaButtons = (props) => {
    const socialMedia = contactInfo.socialMedia

    //generate social media buttons with its respective image
    const generateButtons = () => {
        return (
            socialMedia.map((item) => {
                return (
                    <a key={item.link} className='socialMediaButton'
                        aria-label={item.name}
                        style={{ backgroundImage: `url(${item.image})`,fontSize:0 }}
                        rel='external'
                        href={item.link}
                        id={`${item.name}-Button`}
                    >{item.name}</a>
                )
            })
        )
    }



    return (
        <nav aria-label='Siguenos en nuestras redes' className={`socialMediaButtonsContainer ${props.className}`}>
            {generateButtons()}
        </nav>
    )
}

export default socialMediaButtons;