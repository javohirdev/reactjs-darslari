import React, { useEffect } from 'react';
import './tutorial.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Image1 from './images/img1.jpg';
import Image2 from './images/img2.jpg';
import Image3 from './images/img3.jpg';

const Tutorial1 = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <div>
            <div className="imageSection">
                <img data-aos="fade-right" data-aos-duration="1000" src={Image1} />
                <img data-aos="fade-up" data-aos-duration="1500" data-aos-easing="linear" src={Image2} />
                <img data-aos="fade-up-right" data-aos-duration="1000" data-aos-delay="3000" src={Image3} />

                <img data-aos="fade-right" data-aos-duration="1000" src={Image1} />
                <img data-aos="flip-left" data-aos-duration="900" src={Image2} />
                <img data-aos="zoom-in" data-aos-duration="500" src={Image3} />
            </div>
        </div>
    );
};

export default Tutorial1;