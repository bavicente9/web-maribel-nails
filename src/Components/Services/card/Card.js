import ButtonAppointment from "../../BtnAppointment/ButtonAppointment"

import './Card.css'

//return a card with the props information
const Card = (props) => {
    const infoCard = props.item
    const index = props.index

    return (

        <div className='card-service'>
            <div id={`${index}front-card`} className='card-side front-card'  >
                <div className='topPart'>
                    <img alt={infoCard.name} src={infoCard.image} />
                    <h2>{infoCard.name}</h2>
                </div>
                <div className='bottomPart'>

                    <p>{infoCard.description}</p>

                    <div className='divButtons'>
                        <button className='btn-trataments' onClick = {props.handleChange}>TRATAMIENTOS</button>
                        <ButtonAppointment />
                        
                    </div>

                </div>
            </div>

            <div id={`${index}back-card`} className='card-side back-card'>
                <h2>{infoCard.name}</h2>
                <ul>
                    {(() =>
                        infoCard.services_list.map((service, index) => {
                            return (
                                <li key={index} >{service}</li>
                            )
                        })
                    )()}
                </ul>

                <ButtonAppointment className='btn-back-card' />
            </div>
        </div>

    )
}

export default Card;
