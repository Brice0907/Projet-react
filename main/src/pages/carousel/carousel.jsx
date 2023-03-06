import './style/style.scss'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import { useState } from 'react';

export default function Carousel() {

    const slides = [
        {
            url: 'https://lemag.nikonclub.fr/wp-content/uploads/2016/11/Photo-selection-pour-Nikon-France-Mattia-Bonavida-2016-9.jpg'
        },
        {
            url: 'https://www.photo-paysage.com/albums/Paysages/Lac-riviere-cascade/thumb_croatie-lacs-plitvice-cascades-7.jpg'
        },
        {
            url: 'https://resize.elle.fr/original/var/plain_site/storage/images/loisirs/evasion/paysage-ensoleille/90705820-1-fre-FR/Ces-paysages-ensoleilles-boosteront-votre-moral-toute-l-annee.jpg'
        },
        {
            url: 'https://cdn.shopify.com/s/files/1/2792/8560/files/des-paysages-canadiens-a-couper-le-souffle-5_1024x1024.jpg?v=1593034314'
        },
        {
            url: 'https://img.freepik.com/photos-gratuite/jetee-au-bord-lac-hallstatt-autriche_181624-44201.jpg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const changeIndex = (index) => {
        setCurrentIndex((currentIndex + index + slides.length) % slides.length);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className='slideshow group'>
            <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='slideshow_img'></div>

            {/* Flèche de gauche */}
            <div className='slideshow_arrow slideshow_arrow_left'>
                <BsChevronCompactLeft onClick={() => changeIndex(-1)} className='slideshow_arrow_logo' />
            </div>

            {/* Flèche de droite */}
            <div className='slideshow_arrow slideshow_arrow_right'>
                <BsChevronCompactRight onClick={() => changeIndex(+1)} className='slideshow_arrow_logo' />
            </div>

            <div className='slideshow_point'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='slideshow_point_text'>
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>
    )
}