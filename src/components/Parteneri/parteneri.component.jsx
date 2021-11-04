import React from 'react'
import './parteneri.component.scss'

//Partner's logos
import cemacon from '../../assets/partners/cemacon-logo.png'
import ceresit from '../../assets/partners/ceresit-logo.png'
import knauf from '../../assets/partners/Lasselsberger-Knauf-logo.png'
import leier from '../../assets/partners/Leier_International-logo.png'
import siceram from '../../assets/partners/siceram-logo.png'
import tondach from '../../assets/partners/tondach-logo.png'
import ytong from '../../assets/partners/ytong-logo.png'
import macon from '../../assets/partners/MAC.png'
import kam from '../../assets/partners/KAM.png'
import sem from '../../assets/partners/SEM.png'
import sym from '../../assets/partners/SYM.png'
import wie from '../../assets/partners/WIE.png'
import vlx from '../../assets/partners/velux.png'

//Swiper 
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
                        <SwiperSlide className="slide"><img src={ytong} alt="ytong"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={cemacon} alt="cemacon"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={ceresit} alt="ceresit"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={knauf} alt="knauf"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={leier} alt="leier"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={tondach} alt="tondach"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={siceram} alt="siceram"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={macon} alt="macon"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={kam} alt="kam"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={sem} alt="sem"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={sym} alt="sym"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={wie} alt="wie"/></SwiperSlide>
                        <SwiperSlide className="slide"><img src={vlx} alt="wie"/></SwiperSlide>
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