import socialMediaButtons from "../SocialMediaButtons/SocialMediaButtons";
function Footer() {
 

    return (
        <div className='Footer'>
            FOOTER
            <div className = 'FooterContainer'>

                <div className='logoSocialMediaContainer'>
                    <div>logo</div>
                    <socialMediaButtons />
                </div>
                <div className = 'infoContainer'>
                    <div className ='info'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;