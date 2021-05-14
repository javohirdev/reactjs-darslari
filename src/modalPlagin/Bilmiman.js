import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import image from '../modalPlagin/maxresdefault.jpg';
import './main.scss';
import { ImageAspectRatioTwoTone } from '@material-ui/icons';
import { SRLWrapper } from 'simple-react-lightbox';

const Bilmiman = () => {

    const [isOpen, setOpen] = useState(false);

    const handleDragStart = (e) => e.preventDefault();

    const items = [
    <img src={image} onDragStart={handleDragStart} />,
    <img src={image} onDragStart={handleDragStart} />,
    <img src={ImageAspectRatioTwoTone} onDragStart={handleDragStart} />,
    ];

    return (
        <div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="YPWOBdlXmVM" onClose={() => setOpen(false)} />
            <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button>
            <SRLWrapper>
                <img src={image} alt="Rasm 1" />
                <img src={image} alt="Rasm 2" />
                <img src={image} alt="Error" />
            </SRLWrapper>
        </div>
    );
};

export default Bilmiman;    