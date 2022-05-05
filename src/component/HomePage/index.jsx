import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../../styles/homepage.css'
const HomePage = () => {
    return (
        <>
            <div className="homepage_container">
                <div className="homepage_content">
                    <main id="home">
                        <section>
                            <h2>Welcome to our Website</h2>
                            <h3>A Resume Maker</h3>
                            <div className="headings">
                                <h1>Welcome Dear <span className="change_content"></span></h1>
                            </div>
                            <div className="btns">
                                <Link to='/signup'>
                                    <button className="btnss">Get Started</button>
                                </Link>
                                <a href="https://github.com/"><IconButton id="btn1"><GitHubIcon /></IconButton></a>
                                <a href="https://www.linkedin.com/in/md-intezar-alam-92814b226/"><IconButton id="btn4"><LinkedInIcon /></IconButton></a>
                                <a href="https://www.instagram.com/"><IconButton id="btn2"><InstagramIcon /></IconButton></a>
                                <a href="https://www.facebook.com/"><IconButton id="btn3"><FacebookIcon /></IconButton></a>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}
export default HomePage;