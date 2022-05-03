import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/homepage.css'
const HomePage = () => {
    return (
        <div className="homepage_container">
            <div className="homepage_content">
                <div className="heading_1">WelCome To Our Website</div>
                <h2 className='headinh_2'>Chaitanya Institute of Technology & Science</h2>
                <h3 className='resume_maker'>A Resume Maker</h3>
                <div className="get_started">
                <Link to='/signup'>
                <button className='getstarted_btn'>Get Started</button>
                </Link>
                </div>
            </div>
        </div>
    )
}
export default HomePage