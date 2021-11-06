import ContactInfo from "./ContactInfo";
import './Contact.css';
const Contact = () => {

    return (
        <div className='contact'>
            <h1> CONTACTO</h1>
            <div className='contactContainer' >
                <ContactInfo />
                <div className='contactLocationContainer' style={{ background: 'gray' }}>
                    <h2>Ubicación</h2>
                </div>
            </div>
        </div>
    )

}


export default Contact;