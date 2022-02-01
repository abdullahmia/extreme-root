import {Link} from 'react-router-dom'
import AboutService from "./AboutService/AboutService"
import aboutBg from '../../media/images/about-bg.jpg';
import './about.css';


const About = () => {
    return (
        <div>
            <div className='wrapper primary-bg'>
                <div className='container'>
                    <div className="text-center">
                        <h2 data-aos="fade-down" data-aos-delay="50">About Us</h2>
                        <p data-aos="fade-down" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>

                {/* About Service Items */}
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <div data-aos="fade-down" data-aos-delay="100" className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-3">
                                <AboutService icon={'fa-lock'} name={'Security Services'} />
                            </div>

                            <div data-aos="fade-down" data-aos-delay="200" className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-3">
                                <AboutService icon={'fa-database'} name={'Data Privacy'} />
                            </div>

                            <div data-aos="fade-down" data-aos-delay="300" className="col-lg-4 col-md-6 col-sm-12 mb-lg-0 mb-3">
                                <AboutService icon={'fa-file-certificate'} name={'Industry Certified'} />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div data-aos="fade-down" data-aos-delay="100" style={{backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="col-lg-6 col-md-12 ">

                        </div>
                        <div className="col-lg-6 col-md-12 py-5 ps-4 pe-5">
                            <h6 data-aos="fade-down" data-aos-delay="50">Welcome to Extreme Root 🐱‍💻</h6>
                            <h2 data-aos="fade-down" data-aos-delay="100">The Perfect Solution For All The Protection Question</h2>
                            <p data-aos="fade-down" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip ex ea commodo</p>

                            <div className="mt-5">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-lg-0 mb-3">
                                        <div data-aos="fade-down" data-aos-delay="300" className="mission_vission">
                                            <i className="fal fa-bullseye-arrow mb-3"></i>
                                            <h4 data-aos="fade-down" data-aos-delay="350">Our Vission</h4>
                                            <p>Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-lg-0 mb-3">
                                        <div data-aos="fade-down" data-aos-delay="400" className="mission_vission">
                                            <i className="far fa-check-circle mb-3"></i>
                                            <h4 data-aos="fade-down" data-aos-delay="450">Our Mission</h4>
                                            <p data-aos="fade-down" data-aos-delay="500">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div data-aos="fade-down" data-aos-delay="500" className="mt-5">
                                <Link to='/' className='main-btn'>Get a Qoute</Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
