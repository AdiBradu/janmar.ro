import React from 'react'
import './parteneri.component.scss'
import cemacon from '../../assets/partners/cemacon-logo.png'
import ceresit from '../../assets/partners/ceresit-logo.png'
import knauf from '../../assets/partners/Lasselsberger-Knauf-logo.png'
import leier from '../../assets/partners/Leier_International-logo.png'
import siceram from '../../assets/partners/siceram-logo.png'
import tondach from '../../assets/partners/tondach-logo.png'
import ytong from '../../assets/partners/ytong-logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

// install Swiper modules
SwiperCore.use([Autoplay]);


export default function Parteneri() {
    return (
        <section className="section section-05">
            <div className="container">
                <div className="parteneri-message">
                    <div className="display-2"><h1>Parteneri</h1></div>
                    <p>Lucram indeapropae cu partenerii nostri de cursa lunga</p>
                    <Swiper
                        className="swiper"
                        spaceBetween={32}
                        slidesPerView={1}
                        breakpoints= {{
                            // when window width is >= 320px
                            900: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 480px
                            // 1200: {
                            //     slidesPerView: 3,
                            // },
                        }}
                        // navigation
                        autoplay={true}
                        loop={true}
                        speed={500}
                        >
                        <SwiperSlide className="slide"><img src={ytong} alt=""/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={cemacon} alt=""/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={ceresit} alt=""/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={knauf} alt=""/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={leier} alt=""/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={tondach} alt=""/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={siceram} alt=""/></SwiperSlide>
                    </Swiper>
                    {/* <div className="parteneri-slider">
                        <div className="slide">
                            <img src={ytong} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={cemacon} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={ceresit} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={knauf} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={leier} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={tondach} alt=""/>
                        </div>
                        <div className="slide">
                            <img src={siceram} alt=""/>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}