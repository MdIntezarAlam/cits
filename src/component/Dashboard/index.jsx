import { Link } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext';
import '../../styles/dashboard.css'

const Dashboard = () => {
  const { user } = useUserAuth();

  return (
    <div className="create_resume_page">

      <div className="create_resume_page_container">
        <div className="login_success_and_dashboard">
          <h1 className='login_success'>Welcome Dear {user && user.email}</h1>
        </div>
        <div className="Crete_resume">
          <Link to="/create_resume">
            <button className='create_resume_btn'>Create Resume</button>
          </Link>
        </div>
        <div className="download_resume">
          <Link to="/body">
            <button className='download_resume_btn'>Download Resume</button>
          </Link>
        </div>
        <div className="edit_resume">
          <Link to="/body">
            <button className='edit_resume_btn'>Edit Resume</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard