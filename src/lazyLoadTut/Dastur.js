import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import image from '../scrollEffect/images/img2.jpg';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const Dastur = () => {

    const styleImage = {
        width: '75%',
    }

    return (
        <div>
            <h1>Lazy load image tutorial</h1>
            <LazyLoadImage 
                src={image}
                style={styleImage}
                effect="opacity"
                delayTime="1500"
                placeholderSrc={<h1>Loading...</h1>}
            />
            <span>Lorem ipsum dolor</span>
        </div>
    );
};

export default Dastur;