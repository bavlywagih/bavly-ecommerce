'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSlider.css";
import Link from 'next/link';

function HeroSlider() {

    return (
        <>
            <div className="hero">
                <div className="container">
                    <Swiper loop={true} pagination={true} modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 5000, disableOnInteraction: false, }} className="mySwiper">
                        <SwiperSlide>
                            <div className="content">
                                <h4>
                                    Introducing the new
                                </h4>
                                <h3>
                                    Microsoft Xbox <br /> 360 Controller
                                </h3>
                                <p>
                                    Windows Xp/10/7/8 Ps3, Tv Box
                                </p>
                                <Link href='/' className='btn'>Shop Now !</Link>
                            </div>
                            <img src="/img/banner_Hero1.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>
                                    Fresh and clean air
                                </h4>
                                <h3>
                                    Blueair Joy S <br /> Air Purifier
                                </h3>
                                <p>
                                    Compact design for cleaner air in every room
                                </p>
                                <Link href='/' className='btn'>Shop Now !</Link>
                            </div>
                            <img src="/img/banner_Hero2.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="content">
                                <h4>
                                    Enjoy music anywhere
                                </h4>
                                <h3>
                                    iPod Classic <br /> Music Player
                                </h3>
                                <p>
                                    Your favorite music, always with you
                                </p>
                                <Link href='/' className='btn'>Shop Now !</Link>
                            </div>
                            <img src="/img/banner_Hero3.jpg" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HeroSlider;
