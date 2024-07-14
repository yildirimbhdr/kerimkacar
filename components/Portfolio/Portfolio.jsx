import React, { useEffect, useRef } from 'react';
import { portfolioData } from './PortfolioData';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';


const Portfolio = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const sliderRef = useRef(null);

    const updateNavigation = (swiper) => {
        if (prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }
    }, []);

    return (
        <div id="portfolio" className="section-box">
            <div className="section-sm bg-dark border-radius-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <span className="title-heading text-white-04">{portfolioData.mainData.title}</span>
                            <h1 className="display-3 fw-medium">{portfolioData.mainData.title2} <span className="text-gradient">{portfolioData.mainData.title2Span}</span></h1>
                            <p>{portfolioData.mainData.description}</p>
                            {/* Slider Nav */}
                            <div className="mt-4">
                                <button className="swiper-portfolio-prev button-circle cursor-link" onClick={() => sliderRef.current?.slidePrev()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-left"></i>
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                                <button className="swiper-portfolio-next button-circle cursor-link" onClick={() => sliderRef.current?.slideNext()} aria-label="Prev Slide">
                                    <i className="bi bi-arrow-right"></i>
                                    <i className="bi bi-arrow-right"></i>
                                </button>
                            </div>
                            {/* end Slider Nav */}
                        </div>
                    </div> {/* end row */}
                    <Swiper
                        onSwiper={(swiper) => {
                            sliderRef.current = swiper;
                            swiper.on('init', () => {
                                updateNavigation(swiper);
                            });
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="portfolio-slider mt-4 mt-lg-5"
                    >
                        {portfolioData.projects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="portfolio-box">
                                    {/* Image */}
                                    <div className="portfolio-img">
                                        <Link href={`portfolio/${item.slug}`}>
                                            <Image src={item.mainImage} alt={item.title} placeholder="blur" />
                                        </Link>
                                    </div>
                                    <div className="pt-4">
                                        {/* Categories */}
                                        <ul className="list-inline-dot sm-heading text-white mb-2">
                                            {item.categories.map((item, index) => (
                                                <li key={index}>
                                                    <Link className="link-hover" href={`portfolio/${item.slug}`}>
                                                        <span data-text={item.name}>{item.name}</span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                        {/* Caption */}
                                        <h2>
                                            <Link className="portfolio-caption" href={`portfolio/${item.slug}`}>
                                                <i className="bi bi-arrow-right"></i>
                                                {item.title}
                                            </Link>
                                        </h2>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> {/* end container */}
            </div>
        </div>
    )
}

export default Portfolio