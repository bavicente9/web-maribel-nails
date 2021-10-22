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
    ,
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
]

const generateCards = () => servicesObj.map((item) => {
    return (

        <div key={item.name} className='card-service'>
            <div className='front-card'>
                <img alt={item.name} src={item.image} />
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <button>Ver Tratamientos</button>
                <button>Reservar cita</button>
            </div>
            {/*
                <div className='back-card'>
                <h2>Title</h2>
                <ls>
                    <ol>aeoau</ol>
                    <ol>aeoau</ol>
                    <ol>aeoau</ol>
                </ls>
            </div>
            */}
        </div>

    )
})

function Services() {
    const getJson = () => {
        const obj = getJson
    }

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