import './SocialMediaButtons.css'

const socialMedia = [
    {
        name: 'Facebook',
        link: 'https://www.fb.com',
        image : './images/icons/IconFacebook.png'
    }
    , {
        name: 'Instagram',
        link: 'https://www.instagram.com',
        image : './images/icons/IconInstagram.png'
    }
    , {
        name: 'Booksy',
        link: 'https://www.booksy.com',
        image : './images/icons/IconBooksy.png'
    }
]

const socialMediaButtons = () => {

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
        <div className ='socialMediaButtonsContainer'>
            {generateButtons()}
        </div>
    )
}

export default socialMediaButtons;