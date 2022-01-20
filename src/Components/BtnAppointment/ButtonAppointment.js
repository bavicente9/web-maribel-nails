
import './ButtonAppointment.css'


function ButtonAppointment(props) {

    const link = 'https://booksy.com/es-es/11160_maribel-nail-s_estilistas-unas_52975_getafe'

    return (
        <a className={`button-Appointment ${props.className}`} rel='external' href={link}>RESERVAR CITA</a>
    )
}

export default ButtonAppointment;