import ButtonAppointment from "../../BtnAppointment/ButtonAppointment"
import { useState, useEffect } from 'react'

import './Card.css'

const Card = (props) => {
    const [partVisible, setPartVisible] = useState('front-card')
    const infoCard = props.item
    const index = props.index
        useEffect(()=>{ 
            const frontCard = document.getElementById(`${index}front-card`)
            const backCard = document.getElementById(`${index}back-card`)
            if (partVisible === 'front-card') {
                frontCard.style.transform = 'rotateY(0deg)'
                backCard.style.transform = 'rotateY(180deg)'
            } else {
                frontCard.style.transform = 'rotateY(180deg)'
                backCard.style.transform = 'rotateY(0deg)'
                
            }
        } , [partVisible])

        //flip a card 
        const flipCard = () => {
            console.log('call' , partVisible);
            if (partVisible ==='front-card') {
                setPartVisible('back-card')
            } else {
                setPartVisible('front-card')
            }
        }
    
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
                        <button className='btn-trataments' onClick = {flipCard}>TRATAMIENTOS</button>
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
