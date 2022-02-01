import {Link} from 'react-router-dom'
import bannerImg from '../../../media/images/banner.png'
import './hero.css'

const Hero = () => {
    return (
        <div className="hero primary-bg">
            <div className="container">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6 col-sm-12 mb-lg-0 mb-5 pe-5">
                            <h1 data-aos="fade-down" data-aos-delay="50">Professional <span>Company</span> With Reliable Service</h1>
                            <p data-aos="fade-down" data-aos-delay="100" className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod enim tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <div data-aos="fade-down" data-aos-delay="150">
                                <Link className="main-btn">LEARN MORE</Link>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="100" className="col-lg-5 col-md-6 col-sm-12">
                            <img src={bannerImg} className='w-100' alt="Hero Images" />
                            
                            {/* <Lottie options={animationOptions} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
