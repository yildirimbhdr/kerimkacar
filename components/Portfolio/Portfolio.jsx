import React from 'react';
import { portfolioData } from './PortfolioData';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div id="portfolio" className="section-box">
            <div className="section-sm bg-dark border-radius-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <span className="title-heading text-white-04">{portfolioData.mainData.title}</span>
                            <h1 className="display-3 fw-medium">{portfolioData.mainData.title2} <span className="text-gradient">{portfolioData.mainData.title2Span}</span></h1>
                            <p>{portfolioData.mainData.description}</p>
                        </div>
                    </div> {/* end row */}
                    <div className="row mt-4">
                        {portfolioData.projects.map((item, index) => (
                            <div key={index} className="col-12 col-md-12 mb-4">
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
                                            {item.categories.map((category, catIndex) => (
                                                <li key={catIndex}>
                                                    <Link className="link-hover" href={`portfolio/${category.slug}`}>
                                                        <span data-text={category.name}>{category.name}</span>
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
                            </div>
                        ))}
                    </div>
                </div> {/* end container */}
            </div>
        </div>
    )
}

export default Portfolio;
