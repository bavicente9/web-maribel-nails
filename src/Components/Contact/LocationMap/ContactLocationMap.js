import './ContactLocationMap.css'

const ContactLocationMap = () => {
    return (
        <div className='contactMapContainer' >
            <h2>UBICACIÓN</h2>
            <div className='contactMap'>
                <iframe className = 'map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.203192798828!2d-3.7225095572921614!3d40.31564777079063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDE4JzU2LjUiTiAzwrA0MycxNC45Ilc!5e0!3m2!1sen!2sec!4v1636641564616!5m2!1sen!2sec"   allowFullScreen='' loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ContactLocationMap;