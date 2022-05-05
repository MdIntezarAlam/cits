import React from 'react'
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm   navbar navbar-dark bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand " href="/home">RESUME MAKER</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav active m-1">
                            <li className="nav-item ">
                                <a className="nav-link active m-1" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-1" href="/signup">Make Resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-1" href="/login">Jobsection</a>
                                {/* <a className="nav-link active m-1" href="/jobsection_dashboard">Jobsection</a> */}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-1" href="/signup">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-1" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-1" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active m-1" href="https://www.upgrad-bootcamps.com/full-stack-development-bootcamp?utm_source=GOOGLE&utm_medium=NBSEARCH&utm_campaign=IND_ACQ_WEB_GOOGLE_NBSEARCH_BU_UPG_BCFS_HIT_ROI_NW&utm_content=Bootcamp_Engineering_PM&utm_term=software%20development%20program&gclid=EAIaIQobChMIqPTg6fq-9wIVjAkrCh3qjABmEAAYASAAEgLHKfD_BwE">Developer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar