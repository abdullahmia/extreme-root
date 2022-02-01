import './aboutservice.css';

const AboutService = ({icon, name}) => {
    return (
        <div className="card p-4  about__service">
            <div className="d-flex align-items-center gap-3 about__service_item">
                <i className={`fas ${icon}`}></i>
                <h5>{name}</h5>
            </div>
            <div className="card-boy pt-3">
                <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
        </div>
    )
}

export default AboutService
