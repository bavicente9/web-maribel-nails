import './SocialMediaButtons.css'
import contactInfo from '../InfoJSONs/ContactInfo.json'

const socialMediaButtons = (props) => {
    const socialMedia = contactInfo.socialMedia

    //generate social media buttons with its respective image
    const generateButtons = () => {
        return (
            socialMedia.map((item) => {
                return (
                    <a key={item.link} className='socialMediaButton'
                        aria-label={item.name}
                        style={{ backgroundImage: `url(${item.image})` }}
                        rel='external'
                        href={item.link}
                        id={`${item.name}-Button`}
                    ></a>
                )
            })
        )
    }



    return (
        <nav aria-label='follow us in our social media' className={`socialMediaButtonsContainer ${props.className}`}>
            {generateButtons()}
        </nav>
    )
}

export default socialMediaButtons;