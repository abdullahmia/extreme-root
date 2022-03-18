import { Link } from 'react-router-dom';
import logo from '../../media/images/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <div className='container wrapper-top'>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                    <img src={logo} style={{width: "200px"}} alt="" />
                    <div className='footer__icon'>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                    <h5>Products</h5>
                    <div className="footer__links">
                        <Link to='/'>Features</Link>
                        <Link to='/'>Platform</Link>
                        <Link to='/'>Product</Link>
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>API Docs</Link>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                    <h5>Company</h5>
                    <div className="footer__links">
                        <Link to='/'>About Us</Link>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms & Condition</Link>
                        <Link to='/'>Newsletter</Link>
                    </div>
                </div>
                
                <div className="col-lg-3 col-md-6 col-sm-12 mb-lg-0 mb-4">
                    <h5 className='text-uppercase'>Newsletter</h5>
                    <p>We are working Letest Technology to build your business secure.</p>

                </div>
            </div>

            <hr className='footer_devider' />

            <div className='text-center'>
                <p>Copyright © 2021. All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer;