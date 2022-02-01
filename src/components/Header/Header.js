import {NavLink, Link} from 'react-router-dom'
import logo from '../../media/images/logos.svg'
import './header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light primary-bg py-3">
            <div className="container">
                <Link className="navbar-brand" to="/"><img style={{"width": "200px"}} src={logo} alt="Logo" /></Link>
                <button className="navbar-toggler shadow-none text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <i className="far fa-align-left"></i>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <NavLink exact to='/' activeClassName={'nav__active'} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to='/about' activeClassName={'nav__active'} className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item mx-3 nav_drop_menu">
                            <NavLink to='/services' activeClassName={'nav__active'} className="nav-link">Services  <i className="fas fa-angle-right dropdown_menu_icon"></i></NavLink>
                            <ul className='nav_dropdown'>
                                <li><Link to={'/services/ctf'}>CTF</Link></li>
                                <li className='third_dropdown_menu'><Link to='/'>Next Gen-Pen-Test <i className="fas fa-angle-right third_dropdown_menu_icon"></i></Link>
                                    <ul className='third_dropdown'>
                                        <li><Link to={'/services/api-pen-testing'}>API PenTesting</Link></li>
                                        <li><Link to={'/services/network-pen-testing'}>Network PenTesting</Link></li>
                                        <li><Link to={'/services/application-pen-testing'}>Application PenTesting</Link></li>
                                    </ul>
                                
                                </li>
                                <li><Link to={'/services/security-audit'}>Security Audit</Link></li>
                                <li><Link to={'/services/network-device-configuration-review'}>Network Device Configuration Review</Link></li>
                                <li><Link to={'/services/infosec-consultancy'}>InfoSec Consultancy </Link></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-3">
                            <NavLink to='/contact' activeClassName={'nav__active'} className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="mb-lg-0 mb-5 mt-lg-0 mt-3">
                        <Link to='/contact' className="main-btn">Contact us</Link>
                    </div>
                </div>
            </div>
                
        </nav>
    )
}

export default Header;
