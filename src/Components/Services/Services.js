import { useState } from 'react'
import Card from './card/Card'
import './Services.css'

const servicesObj = [


    {
        name: "Cejas",
        description: `Uñas acrílicas, esmaltado permanente y manicura perfecta.
                Plasmamos en tus uñas cualquiera de tus ideas,
                desde las más sencillas a las más atrevidas.`,
        image: "./images/imagesServices/cejas.png",
        services_list: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
            "Service 6",
            "Service 7",
            "service 8"
        ]
    }


    , {
        name: "Cejas",
        description: `Uñas acrílicas, esmaltado permanente y manicura perfecta.
                Plasmamos en tus uñas cualquiera de tus ideas,
                desde las más sencillas a las más atrevidas.`,
        image: "./images/imagesServices/cejas.png",
        services_list: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
            "Service 6",
            "Service 7",
            "service 8"
        ]
    }

    , {
        name: "Cejas",
        description: `Uñas acrílicas, esmaltado permanente y manicura perfecta.
                Plasmamos en tus uñas cualquiera de tus ideas,
                desde las más sencillas a las más atrevidas.`,
        image: "./images/imagesServices/cejas.png",
        services_list: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
            "Service 6",
            "Service 7",
            "service 8"
        ]
    }

    , {
        name: "Cejas",
        description: `Uñas acrílicas, esmaltado permanente y manicura perfecta.
                Plasmamos en tus uñas cualquiera de tus ideas,
                desde las más sencillas a las más atrevidas.`,
        image: "./images/imagesServices/cejas.png",
        services_list: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
            "Service 6",
            "Service 7",
            "service 8"
        ]
    }

    , {
        name: "Cejas",
        description: `Uñas acrílicas, esmaltado permanente y manicura perfecta.
                Plasmamos en tus uñas cualquiera de tus ideas,
                desde las más sencillas a las más atrevidas.`,
        image: "./images/imagesServices/cejas.png",
        services_list: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
            "Service 6",
            "Service 7",
            "service 8"
        ]
    }

    , {
        name: "Cejas",
        description: `Uñas acrílicas, esmaltado permanente y manicura perfecta.
                Plasmamos en tus uñas cualquiera de tus ideas,
                desde las más sencillas a las más atrevidas.`,
        image: "./images/imagesServices/cejas.png",
        services_list: [
            "Service 1",
            "Service 2",
            "Service 3",
            "Service 4",
            "Service 5",
            "Service 6",
            "Service 7",
            "service 8"
        ]
    }
    
]


/*return all cards with front and back parts*/
const generateCards = () => servicesObj.map((item, index) => {
    return(
        <Card key = {index} item = {item} index = {index} />
    )
                
})

function Services() {
  //  const [activeCard , setActiveCard] = useState(-1)
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