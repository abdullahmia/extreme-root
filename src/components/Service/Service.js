import {Link} from 'react-router-dom';
import './service.css';

const Service = ({icon, name, shortdescription, link}) => {
    return (
        <div className='card shadow border-0 py-3 text-start service__card'>
            <div className="card-header border-0 p-4 px-5 pb-1">
                <div data-aos="fade-down" data-aos-delay="300" className="card__icon">
                    <i className={`${icon} mb-3
                    `}></i>
                </div>
                <h4 data-aos="fade-down" data-aos-delay="400">{name}</h4>    

            </div>
            {/* <hr className='service_card_devider' /> */}
            <div className="card-body p-4 px-5">
                <p data-aos="fade-down" data-aos-delay="500">{shortdescription}</p>

                <div data-aos="fade-down" data-aos-delay="600">
                    <Link className='service_card_link' to={link} >Read more <i className="fas fa-long-arrow-right"></i></Link>
                </div>

            </div>
        </div>
    )
}

export default Service
