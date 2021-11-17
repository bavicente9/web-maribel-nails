
import './ButtonAppointment.css'


function ButtonAppointment(props) {
    const link = 'https://booksy.com/es-es/11160_maribel-nail-s_estilistas-unas_52975_getafe'
    const handleClick = () => {
        window.open(
            link, '__blank'
        )
    }
    return (
        <button className={`button-Appointment ${props.className}`} onClick = {handleClick}  >RESERVAR CITA</button>
    )
}

export default ButtonAppointment;