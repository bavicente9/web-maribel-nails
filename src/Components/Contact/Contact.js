import ContactInfo from "./ContactInfo/ContactInfo";
import './Contact.css';
import ContactLocationMap from "./LocationMap/ContactLocationMap";
const Contact = () => {

    return (
        <div className='contact'>
            <div className='contactContainer' >
                <ContactInfo />
                <ContactLocationMap />
            </div>
        </div>
    )

}


export default Contact;