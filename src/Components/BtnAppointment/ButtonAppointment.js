
import './ButtonAppointment.css'


function ButtonAppointment(props) {
    return (
        <button  className ={`button-Appointment ${props.className}`}  >RESERVAR CITA</button>
    )
}

export default ButtonAppointment;