import './Slider.css'

import { useState,useEffect } from 'react';

//get all path images for the slider
const getPathImages = () =>{
    
    function importAll(r) {
        return r.keys().map(r);
    
    }
    const images = importAll(require.context('./imagesSlider/', false, /\.(png|jpe?g|svg)$/));
    
    return images
}


const Slider = () => {
    const [index, setIndex] = useState(0)

    const images = getPathImages();
    const delay = 3000;
   

    useEffect(() => {
        setTimeout(() =>setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {};
      }, [index]);


    return (
        <div className='slider-container'>
            <div className='slider-content' style = {{transform:`translateX(${-index *100}%)`}}>
                {
                    images.map(image => {
                        const source = image.default
                        return (
                            <img key = {source}  alt={source}  src ={source}/>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Slider;
