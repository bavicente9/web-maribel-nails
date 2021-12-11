import ContactInfo from "./ContactInfo/ContactInfo";
import './Contact.css';
import ContactLocationMap from "./LocationMap/ContactLocationMap";
const Contact = () => {

    return (
        <div className='contact' id = 'contact'>
            <h1 className ='titleContact' >CONTACTO</h1>
            <div className='contactContainer' >
                <ContactInfo />
                <ContactLocationMap />
            </div>
        </div>
    )

}


export default Contact;