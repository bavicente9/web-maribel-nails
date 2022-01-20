import './Slider.css'

import { useState, useEffect } from 'react';

//get all path images for the slider
const getPathImages = () => {

    function importAll(r) {
        return r.keys().map(r);

    }
    const images = importAll(require.context('./imagesSlider/', false, /\.(png|jpe?g|svg)$/));

    return images
}


const Slider = () => {
    const [index, setIndex] = useState(0)

    const images = getPathImages();
    const delay = 4000;



    //each x delay change the index
    useEffect(() => {
        const interval = setInterval(() => setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
            delay
        );
        return () => {
            if (interval) {
                clearInterval(interval)
            }
        };
    }, [index]);


    //it change the index 1 back or 1 next
    //if the index is 0 and try to back 1 position it will return the last position
    //if the index is the last position and try to pass to next position it will return the start position 
    const handleChange = (direction) => {

        if (direction === 'next') {
            setIndex(() =>
                index === images.length - 1 ? 0 : index + 1
            )
        } else if (direction === 'back' && index >= 0) {
            setIndex(() =>
                index === 0 ? images.length - 1 : index - 1
            )

        }
    }

    return (
        <section aria-label='images presentation' className='slider-container' id='home'>
            <button aria-label='slider direction rigth' className='rightArrow' onClick={() => handleChange('next')} />
            <button aria-label='slider direction left' className='leftArrow' onClick={() => handleChange('back')} />

            <div className='slider-content' style={{ transform: `translateX(${-index * 100}%)` }}>
                {
                    images.map(image => {
                        const source = image.default
                        return (
                            <img key={source} alt={''} src={source} />
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Slider;
