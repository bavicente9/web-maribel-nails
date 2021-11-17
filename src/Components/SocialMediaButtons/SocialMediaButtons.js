import './SocialMediaButtons.css'
import contactInfo from '../InfoJSONs/ContactInfo.json'

const socialMediaButtons = (props) => {
    const socialMedia = contactInfo.socialMedia
    //open a new tab with its respective link
    const handleClick = (link) => {
        window.open(
            link, '__blank'
        )
    }
    //generate social media buttons with its respective image
    const generateButtons = () => {
        return (
            socialMedia.map((item) => {
                return (
                    <button key={item.link} className='socialMediaButton'  
                    style ={{backgroundImage :`url(${item.image})`}}
                     onClick={() => { handleClick(item.link) }} ></button>
                )
            })
        )
    }



    return (
        <div className ={`socialMediaButtonsContainer ${props.className}`}>
            {generateButtons()}
        </div>
    )
}

export default socialMediaButtons;