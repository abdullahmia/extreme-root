import './servicefeaturecard.css';

const ServiceFeatureCard = ({title, img}) => {
    return (
        <div className='px-3 py-5 service_feature_card'>
            <div>
                <img src={img} className='service_feature_icon' />
            </div>

            <div className='title'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default ServiceFeatureCard
