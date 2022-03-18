import titleBg from '../../media/images/services/service-detail-bg.jpg';

const ServiceTitle = ({title, description}) => {
    return (
        <div className='primary-bg wrapper'>
            <div className="row">
                <div className="col-lg-8 col-md-7 col-sm-12 text-center m-auto">
                    <h2 data-aos="fade-down" data-aos-delay="50">{title}</h2>
                    <p data-aos="fade-down" data-aos-delay="100">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceTitle;
