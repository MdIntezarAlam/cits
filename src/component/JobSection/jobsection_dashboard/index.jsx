import React from 'react'
import '../../../styles/jobsectiondashboard.css'
import { Link } from 'react-router-dom';


const Jobsection_Dashboard = () => {
    return (
        <>
            <div className='jobsection_dashboard'>
                {/* Section-one */}
                <div className="job_container">
                    <div className="places_wipro">
                        <div className='place_heading'>About Placement</div>
                        <div className="place_btn">
                            <Link to='/Place_wipro'>
                                <button className='place_btns'>Wipro</button>
                            </Link>
                        </div>
                    </div>
                    <div className="places_tcs">
                        <div className='place_heading_tcs'>About Placement</div>
                        <div className="place_btn">
                            <Link to='/Place_tcs'>
                                <button className='place_btns'>TCS</button>
                            </Link>
                        </div>
                    </div>
                    <div className="places_tcs">
                        <div className='place_heading_tcs'>About Placement</div>
                        <div className="place_btn">
                            <Link to='/Place_tcs'>
                                <button className='place_btns'>IBM</button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Section-Two */}
                <div className="job_container">
                    {/* YouTube */}
                    <div className="youtube">
                        <div className='heading_youtube'>YouTube</div>
                        <div className="you_btn">
                            <a href="https://www.youtube.com/watch?v=jN8fLQgC6M8">
                                <button className='you_btns'>YouTube</button>
                            </a>
                        </div>
                    </div>
                    {/* Interview */}
                    <div className="interview">
                        <div className='heading_interview'>Interview Tips</div>
                        <div className="inter_btn">
                            <a href="https://www.charitycomms.org.uk/ten-top-tips-for-online-job-interviews?gclid=Cj0KCQjw37iTBhCWARIsACBt1IyZhcQCbWmIJ64inKW_tcR1OdHdJy7xrt3GtW_BrhSiJB3KfgmCa4AaAmZMEALw_wcB">
                                <button className='inter_btns'>Interview </button>
                            </a>
                        </div>
                    </div>
                    {/* Mock Test */}
                    <div className="mocktest">
                        <div className='heading_mocktest'>MockTest</div>
                        <div className="mocktest_btn">
                            <a href="https://www.imocha.io/pre-employment-testing/all-tests">
                                <button className='mocktest_btns'>MockTest</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section-Three */}
                <div className="job_container">
                    {/* Free Course */}
                    <div className="freecourse">
                        <div className='heading_freecourse'>Free Course</div>
                        <div className="freecourse_btn">
                            <a href="https://www.udemy.com/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Brand-Topic_la.EN_cc.INDIA&utm_content=deal4584&utm_term=_._ag_139989587990_._ad_595509303307_._kw_udemy_._de_c_._dm__._pl__._ti_kwd-47064550911_._li_9302481_._pd__._&matchtype=p&gclid=Cj0KCQjw37iTBhCWARIsACBt1IyjxLxcb8jf4ZIMMfcr1SZwamEkaFCJxUYMXZOjOscAxZmIZVo1yxMaAkOkEALw_wcB">
                                <button className='freecourse_btns'>Free-course</button>
                            </a>
                        </div>
                    </div>
                    <div className="spoken">
                        <div className='heading_spoken'>Spoken-English</div>
                        <div className="spoken_btn">
                            <a href="https://www.englishpartner.in/?gclid=EAIaIQobChMI67Ouhva-9wIVw5JmAh2dNAOqEAAYAiAAEgKuMvD_BwE">
                                <button className='spoken_btns'>spoken-Eng</button>
                            </a>
                        </div>
                    </div>
                    <div className="question">
                        <div className='heading_question'>Previous-QN</div>
                        <div className="question_btn">
                            <a href="https://hbr.org/2021/11/10-common-job-interview-questions-and-how-to-answer-them">
                                <button className='question_btns'>previous question</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobsection_Dashboard