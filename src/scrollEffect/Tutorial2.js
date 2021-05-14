import React from 'react';
import Fade from 'react-reveal/Fade';
import './tutorial.css';
import './animation.css';
import Flip from 'react-reveal/Flip';
import Reveal from 'react-reveal/Reveal';

const Tutorial2 = () => {
    return (
        <div>
            {/* <Fade left>
                <h1>Hello React reveal</h1>
            </Fade>
            <Fade top>
                <h1>Hello React reveal Top</h1>
            </Fade>

            <Flip top>
                <h1>Flip effect</h1>
            </Flip> */}

            <Reveal effect="animText" duration="700">
                <h1>Maxsus Custom CSS effect</h1>
            </Reveal>
        </div>
    );
};

export default Tutorial2;