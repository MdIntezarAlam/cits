import React from 'react'
import '../../../styles/place_wipro.css'
import wip from '../../../image/wip.PNG'
import wip2 from '../../../image/wip2.jpg'
import wip3 from '../../../image/wip3.jpg'
import wip4 from '../../../image/wip4.jpg'
const Place_wipro = () => {
    return (
        <div className='place_container'>
            <div className="place_box">
                <div className="wipro">
                    <div className="wipro_top_headingg">
                        <h1 className='wipro_heading'>THE BIGEST COMPANY IN THE WORD WIPRO</h1>
                        <a href="https://www.receptix.com/us/data-asset-management-openings?r_campaign=17067682011&utm_campaign=17067682011&utm_source=google&utm_medium=cpc&utm_type=search&gclid=EAIaIQobChMI_eriz5a-9wIVwQ5yCh32_QYqEAAYASAAEgJc8_D_BwE">
                            <button className='job_btn'>Apply for Job</button>
                        </a>
                    </div>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={wip} className="d-block w-100 h-30" height="400px" />
                            </div>
                            <div className="carousel-item">
                                <img src={wip2} className="d-block w-100" height="400px" />
                            </div>
                            <div className="carousel-item">
                                <img src={wip4} className="d-block w-100" height="400px" />
                            </div>
                            <div className="carousel-item">
                                <img src={wip3} className="d-block w-100" height="400px" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://www.wipro.com/products-and-platforms/'>
                            <button className="wipro_btns"> VISIT WIPRO FOR PLACEMETS</button>
                        </a>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://www.wipro.com/leadership/'>
                            <button className="wipro_btns_2"> VISIT WIPRO FOR LEADERSHIP</button>
                        </a>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://www.wipro.com/cybersecurity/'>
                            <button className="wipro_btns"> VISIT WIPRO FOR CYBERSECURITERY</button>
                        </a>
                    </div>
                </div>
                {/* Footer sections */}
                <div className="footer_heading">
                    <div className="content">@2002 Wipro Limited</div>
                    <div className="content"><a href="https://www.wipro.com/privacy-statement/" className='anchor_tag'>Privacy Statement</a></div>
                    <div className="content"><a href="https://www.wipro.com/disclaimer/" className='anchor_tag'>Disclaimer</a></div>
                    <div className="content"><a href="https://www.wipro.com/rssfeed/" className='anchor_tag'>Rss Feed</a></div>
                    <div className="content">Icons</div>
                </div>
                <div className="footer">
                    <div className="footer_section">
                        <div className="service">
                            <div className="servise_heading">SERVICE OFFERINGS</div>
                            <div className="service_container">
                                <div className="service_content"><a href="https://www.wipro.com/analytics/"  className='anchor_tag'>Data, Analytics & AI </a></div>
                                <div className="service_content"><a href="https://www.wipro.com/applications/"  className='anchor_tag'>Application </a></div>
                                <div className="service_content"> <a href="https://www.wipro.com/business-process/"  className='anchor_tag'>Digital Operations and Plateform</a></div>
                                <div className="service_content">Consulting</div>
                                <div className="service_content">Infrastructure Service</div>
                            </div>
                        </div>

                        <div className="footer_container">
                            <div className="service">
                                <div className="servise_heading">Industries</div>
                                <div className="service_container">
                                    <div className="service_content"><a href="https://www.wipro.com/aerospace-and-defense/"  className='anchor_tag'>Aerospace & Defense </a></div>
                                    <div className="service_content">Automotive</div>
                                    <div className="service_content">Banking</div>
                                    <div className="service_content">Capital Markets</div>
                                    <div className="service_content">Communications</div>
                                    <div className="service_content">Consumer Elctronics</div>
                                    <div className="service_content">Consumer Packaged Goods</div>
                                    <div className="service_content">Education</div>
                                    <div className="service_content">Engineering, Construction & Operations</div>
                                    <div className="service_content">Healthcare</div>
                                    <div className="service_content">Insurance</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_container">
                            <div className="service">
                                <div className="servise_heading">Disclaimer</div>
                                <div className="service_container">
                                    <div className="service_content">Oil & Gas</div>
                                    <div className="service_content">Pharmaceutical & Life Sciences</div>
                                    <div className="service_content">Platforms & Software Products</div>
                                    <div className="service_content">Industrial & Process Manufacturing</div>
                                    <div className="service_content">Professional Services</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_container">
                            <div className="service">
                                <div className="servise_heading"><a href="https://www.wipro.com/cloud/" className='anchor_tag'></a> Cloud</div>
                                <div className="service_container">
                                    <div className="service_content"><a href="https://www.wipro.com/cybersecurity/" className='anchor_tag'>Cybersecurity </a></div>
                                    <div className="service_content"><a href="https://www.wipro.com/digital/" className='anchor_tag'>Digital</a></div>
                                    <div className="service_content"><a href="https://careers.wipro.com/careers-home/" className='anchor_tag'>Careers</a></div>
                                    <div className="service_content">Holmes</div>
                                    <div className="service_content"> <a href="https://www.wipro.com/about-us/" className='anchor_tag'>About Wipro </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place_wipro