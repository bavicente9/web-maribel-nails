import { useState, useEffect } from 'react'
import Card from './card/Card'
import './Services.css'
import servicesObj from '../InfoJSONs/ServicesInfo.json'




function Services() {
    const [activeCard, setActiveCard] = useState(-1)
    const [prevActiveCard, setPrevActiveCard] = useState(-1)

    //this change the prevActiveCard before to change the new ActiveCard to flip the previous active card and show its front side 
    const handleChangeActiveCard = (newActiveCard) =>{
        setPrevActiveCard(activeCard)
        setActiveCard(newActiveCard)
    }

    //to flip and show back Side to the active card. 
    useEffect(() => {
        if(activeCard !== -1){
            const frontCardSide = document.getElementById(`${activeCard}front-card`)
            const backCardSide = document.getElementById(`${activeCard}back-card`)
            
            
            frontCardSide.style.transform = 'rotateY(180deg)'
            backCardSide.style.transform = 'rotateY(0deg)'
        }
        
    }, [activeCard])
    
    
    //to flip and show the previous active card's front side
    useEffect(() => {
        if(prevActiveCard !== -1){
            const frontCardSide = document.getElementById(`${prevActiveCard}front-card`)
            const backCardSide = document.getElementById(`${prevActiveCard}back-card`)
            
            frontCardSide.style.transform = 'rotateY(0deg)'
            backCardSide.style.transform = 'rotateY(180deg)'
        }
    }, [prevActiveCard])
    

    /*return all cards with front and back parts*/
    const generateCards = () => servicesObj.map((item, index) => {
        return (
            <Card key={index} item={item} index={index} handleChange={() => handleChangeActiveCard(index)} />
        )

    })


    return (
        <div className='services'>
            <h1>Services</h1>
            <div className='cards-container'>
                {generateCards()}

            </div>
        </div>
    )
}

export default Services