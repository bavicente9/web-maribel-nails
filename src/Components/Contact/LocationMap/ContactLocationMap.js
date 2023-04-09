import './ContactLocationMap.css'

const ContactLocationMap = () => {
    return (
        <div aria-label='Google maps' className='contactMapContainer' >
            <h2>UBICACIÓN</h2>
            <div className='contactMap'>
                <iframe title='map' className = 'map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.35203722089!2d-3.7196392838634984!3d40.312343969903736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42212d7ab8f195%3A0xc976bd5797fcbfce!2sMaribel%20Nail&#39;s!5e0!3m2!1ses!2ses!4v1681041176176!5m2!1ses!2ses"   allowFullScreen='' loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactLocationMap;