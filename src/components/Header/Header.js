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
                        <li className="nav-item mx-3 menu_dropdown">
                            <NavLink to='/services' activeClassName={'nav__active'} className="nav-link">Services  <i className="fas fa-angle-right dropdown_menu_icon"></i></NavLink>
                            <div className='header_menu_dropdown'>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 mb-lg-0 mb-4">
                                        <div className="p-3">
                                            <Link className='text-light' to={'/services/vapt'}>Internal/External Vulnerability Assessment and Penetration Testing (VAPT)</Link>
                                            
                                            <Link className='text-light' to={'/services/ctf'}>Capture The Flag (CTF) </Link>
                                            
                                            <Link className='text-light' to={'/services/it-audit-digital-forensics-penetration-testing'}>IT 
                                            Audit, Digital Forensics and Penetration Testing</Link>
                                            
                                            <Link to={'/services/web-mobile-security'} className='text-light'>Web Services and Mobile Application Security</Link>

                                            <Link to={'/services/intrusion-detection-incident-response'} className="text-light">Intrusion Detection & Incident Response </Link>

                                            <Link className='text-light' to={'/services/security-audit'}>Security Audit</Link>
                                        
                                            

                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 mb-lg-0 mb-4">
                                        <div className="p-3 ps-0">
                                            <Link className='text-light' to={'/services/network-pen-testing'}>Network PenTesting</Link>

                                            <Link className='text-light' to={'/services/secure-network-architecture-design-implementation-assurance'}>Secure Network Architecture, Design, Implementation and Assurance</Link>

                                            <Link className='text-light' to={'/services/api-pen-testing'}>API PenTesting</Link>

                                            <Link className='text-light' to={'/services/security-operation-center-implementation'}>Security Operation Center Implementation</Link>

                                            <Link className='text-light' to={'/services/infosec-project-management'}>InfoSec Project Management</Link>

                                            <Link className='text-light' to={'/services/infosec-consultancy'}>InfoSec Consultancy </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

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
