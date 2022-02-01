import ServiceFeatureCard from './ServiceFeatureCard';
import './servicefeatures.css';
import bubble from '../../../media/images/bubble.png';

// Icons
import time from './icons/icon_features1.png';
import advisor from './icons/icon_features2.png';
import maintaince from './icons/icon_features3.png';
import highLevel from './icons/icon_features4.png';
import hours from './icons/icon_features5.png';
import remote from './icons/icon_features6.png';


const ServiceFeaturesList = [
    {title: "24 Hours Costumer Service", img: time},
    {title: "Security Advisor For You", img: advisor},
    {title: "Device Security Maintenance", img: maintaince},
    {title: "High Level Cyber Security", img: highLevel},
    {title: "24 Hours Technical Assurance", img: hours},
    {title: "Remote Workers Cyber Security", img: remote},
]


const ServiceFeatures = () => {
    return (
        <div style={{backgroundImage: `url(${bubble})`}} className="service_features container py-5">
            <div className="row">
                <div className="col-lg-8 col-md-10 m-auto text-center service_feature_title">
                    <h2 data-aos="fade-down" data-aos-delay="100">Our Features</h2>
                    <p data-aos="fade-down" data-aos-delay="200">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. </p>
                </div>
            </div>

            <div className='row mt-5'>

                <div data-aos="fade-down" data-aos-delay="100" className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <ServiceFeatureCard title={"24 Hours Costumer Service"} img={time} />
                </div>

                <div data-aos="fade-down" data-aos-delay="200" className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <ServiceFeatureCard title={"Security Advisor For You"} img={advisor} />
                </div>

                <div data-aos="fade-down" data-aos-delay="300" className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <ServiceFeatureCard title={"Device Security Maintenance"} img={maintaince} />
                </div>

                <div data-aos="fade-down" data-aos-delay="400" className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <ServiceFeatureCard title={"High Level Cyber Security"} img={highLevel} />
                </div>

                <div data-aos="fade-down" data-aos-delay="500" className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <ServiceFeatureCard title={"24 Hours Technical Assurance"} img={hours} />
                </div>

                <div data-aos="fade-down" data-aos-delay="600" className='col-lg-4 col-md-6 col-sm-12 mb-4'>
                    <ServiceFeatureCard title={"Remote Workers Cyber Security"} img={remote} />
                </div>
                
                
            </div>
            
        </div>
    )
}

export default ServiceFeatures
