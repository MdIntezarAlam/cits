import React from 'react'
import '../../../styles/place_tcs.css'
import tc1 from '../../../image/tc1.jpg'
import tc2 from '../../../image/tc2.jpg'
import tc3 from '../../../image/tc3.jpg'
import tc4 from '../../../image/tc4.jpg'
const Place_tcs = () => {
    return (
        <div className='place_container'>
            <div className="place_box">
                <div className="wipro">
                    <div className="wipro_top_headingg">
                        <h1 className='wipro_heading'>THE BIGEST COMPANY IN THE TATA CONSULTANCY SERVICES</h1>
                        <a href="https://in.jobrapido.com/jobpreview/185366370?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic">
                            <button className='job_btn'>Apply for Job</button>
                        </a>
                    </div>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={tc3} className="d-block w-100 h-30" height="400px" />
                            </div>
                            <div className="carousel-item">
                                <img src={tc2} className="d-block w-100" height="400px" />
                            </div>
                            <div className="carousel-item">
                                <img src={tc1} className="d-block w-100" height="400px" />
                            </div>
                            <div className="carousel-item">
                                <img src={tc4} className="d-block w-100" height="400px" />
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
                        <a href='https://in.jobrapido.com/?w=urgent%20data&l=telangana&r=auto'>
                            <button className="wipro_bt_jb"> FIND JOBS</button>
                        </a>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://www.tcs.com/careers/tcs-off-campus-hiring'>
                            <button className="wipro_bt_jb1"> VISIT TCS FOR PLACEMETS</button>
                        </a>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://learning.tcsionhub.in/hub/national-qualifier-test/'>
                            <button className="wipro_btns"> TCS EXAM</button>
                        </a>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://www.tcs.com/bfsi-platforms'>
                            <button className="wipro_btns_2"> VISIT TCS PLATEFORM</button>
                        </a>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://www.tcs.com/leadership-diversity-inclusion'>
                            <button className="wipro_btns_2"> VISIT FOR LEADERSHIPS</button>
                        </a>
                    </div>
                    <div className="wipro_btn">
                        <a href='https://www.wipro.com/cybersecurity/'>
                            <button className="wipro_btns"> VISIT TCS FOR CYBERSECURITERY</button>
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
                            <div className="servise_heading">INDUSTRIES</div>
                            <div className="service_container">
                                <div className="service_content"><a href="hhttps://www.tcs.com/banking-financial-services" className='anchor_tag'>Banking &  Financial </a></div>
                                <div className="service_content"><a href="https://www.wipro.com/applications/" className='anchor_tag'>Application </a></div>
                                <div className="service_content"> <a href="https://www.wipro.com/business-process/" className='anchor_tag'>Digital Operations and Plateform</a></div>
                                <div className="service_content">Consulting</div>
                                <div className="service_content">Infrastructure Service</div>
                            </div>
                        </div>

                        <div className="footer_container">
                            <div className="service">
                                <div className="servise_heading">SERVICES</div>
                                <div className="service_container">
                                    <div className="service_content"><a href="https://www.wipro.com/aerospace-and-defense/" className='anchor_tag'>Aerospace & Defense </a></div>
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
                                <div className="servise_heading">PRODUCTS & PLATEFORM</div>
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
                                <div className="servise_heading"><a href="https://www.wipro.com/cloud/" className='anchor_tag'></a> DISCOVER TCS</div>
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

export default Place_tcs