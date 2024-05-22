import './header.css'
import { Link } from "react-router-dom"
import linkedin from '../../assets/linkedin-logo-removebg-preview.png'
import github from '../../assets/github-logo.png'
import profile from '../../assets/profile.jpg'

function Header(){
    return(
        <>
        <nav className="header">
            <ul>
                <li><Link to="/" className='link'>HOME</Link></li>
                <li>
                    <Link to="https://www.linkedin.com/in/igorodsilva/" className='link'>
                    <span className='iconMedia'><img src={linkedin} alt="LinkedIn" className='linkIcon'/> LinkedIn</span>
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/IgorOdSilva" className='link'>
                    <span className='iconMedia'><img src={github} alt="GitHub" className='linkIcon'/> GitHub</span>
                    </Link>
                </li>
                <li><span className='profile'><img src={profile} alt="" /></span></li>
            </ul>
        </nav>
        </>
    )
}

export default Header