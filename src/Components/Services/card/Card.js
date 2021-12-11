import ButtonAppointment from "../../BtnAppointment/ButtonAppointment"
import useFitText from 'use-fit-text'
import './Card.css'
import { useEffect } from "react"

//return a card with the props information
const Card = (props) => {
    const infoCard = props.item
    const index = props.index
    //hook, to resize text when it is overflowed
    const { fontSize, ref } = useFitText({ maxFontSize: 125, minFontSize: 100 });
    return (

        <div className='card-service'>
            <div id={`${index}front-card`} className='card-side front-card'  >
                <div className='topPart'>
                    <img alt={infoCard.name} src={infoCard.image} />
                    <h2  >{infoCard.name}</h2>
                </div>
                <div className='bottomPart'>

                    <p>{infoCard.description}</p>

                    <div className='divButtons'>
                        <button className='btn-trataments' onClick={props.handleChange}>TRATAMIENTOS</button>
                        <ButtonAppointment className = 'btn-front-card'/>

                    </div>

                </div>
            </div>

            <div id={`${index}back-card`} className='card-side back-card'>
                <h2 >{infoCard.name}</h2>
                <ul ref={ref} style={{ fontSize }} id={`${index}-card-services`}>
                    {(() =>
                        infoCard.services_list.map((service, index) => {
                            return (
                                <li key={index} >{service}</li>
                            )
                        })
                    )()}
                </ul>

                <div className='divButtons'>
                    <button className='btn-trataments-back' onClick={props.handleResetCard}>VOLVER</button>
                    <ButtonAppointment className='btn-back-card' />
                </div>
            </div>

        </div>

    )
}

export default Card;
