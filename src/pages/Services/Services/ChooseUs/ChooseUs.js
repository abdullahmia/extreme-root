import './chooseus.css';
import chooseus from '../../../../media/images/chooseus.jpg';
import hoursIcon from '../../../../media/images/icons/icon_24hours.png';
import trustedIcon from '../../../../media/images/icons/icon_trustedcyber.png';
import highlevelIcon from '../../../../media/images/icons/icon_highlevel.png'

const ChooseUs = () => {
    return (
        <div className='primary-bg wrapper'>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-down" data-aos-delay="100" className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 mb-5">
                        <img src={chooseus} loading='lazy' className='w-100 chooseus_img' alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mb-lg-0 px-4 ">
                        <h2 data-aos="fade-down" data-aos-delay="100">Why Choose Us?</h2>
                        <div className='choose_skills'>
                            <div data-aos="fade-down" data-aos-delay="200" className='d-flex align-items-center'>
                                <img src={hoursIcon} alt="" />
                                <div className='ms-4'>
                                    <h4>24 Hours Costumer Service</h4>
                                    <p>Morbi tincidunt mauris a hendrerit lacinia. In malesuada magna.</p>
                                </div>
                            </div>

                            <div data-aos="fade-down" data-aos-delay="300" className='d-flex align-items-center mt-4'>
                                <img src={trustedIcon} alt="" />
                                <div className='ms-4'>
                                    <h4>Trusted Cyber Company</h4>
                                    <p>Morbi tincidunt mauris a hendrerit lacinia. In malesuada magna.</p>
                                </div>
                            </div>

                            <div data-aos="fade-down" data-aos-delay="400" className='d-flex align-items-center mt-4'>
                                <img src={highlevelIcon} alt="" />
                                <div className='ms-4'>
                                    <h4>High Level Cyber Security</h4>
                                    <p>Morbi tincidunt mauris a hendrerit lacinia. In malesuada magna.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ChooseUs
