import './style.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const carroselImg = [
    { id: '1', image: 'https://acmanangement.000webhostapp.com/img/lugar%20bonito.jpg' },
    { id: '2', image: 'https://acmanangement.000webhostapp.com/img/doguinho2.png' },
    { id: '3', image: 'https://acmanangement.000webhostapp.com/img/doguinho3.png' },
    { id: '4', image: 'https://acmanangement.000webhostapp.com/img/doguinho4.jpg' }
]
function Carrossel() {
    return (
        <div className="carrosel">
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
            >
                {carroselImg.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="Slider"
                            className='slide-item'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default Carrossel