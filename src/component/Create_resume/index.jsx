import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/create_resume.css';
const Create_resume = () => {
    return (
        <div className='create_resume'>
            <div className="containers_homepage">
                <Link to="/body">
                    <button className="freshers">Freshers</button>
                </Link>
                <Link to="/body">
                    <button className="goverment">Goverments</button>
                </Link>
            </div>
        </div>
    )
}

export default Create_resume