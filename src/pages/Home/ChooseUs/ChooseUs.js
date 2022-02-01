import supportImg from '../../../media/images/support-img.png';
import './chooseus.css';

const ChooseUs = () => {
    return (
        <div className="choose_us">
            <div className="container">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-10 col-sm-10 m-auto text-center">
                            <h2 data-aos="fade-down" data-aos-delay="50">We Are Here to Support Your <span>Business</span></h2>
                        </div>
                    </div>

                    <div className="row align-items-center mt-5">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-5">
                            <div className="pe-4">
                                <div data-aos="fade-down" data-aos-delay="100" className="card border-0 bg-transparent mb-4 experienced__item">
                                    <div className="mb-2 experienced_item_icon">
                                        <i className="fas fa-users"></i>
                                    </div>
                                    <h4>Experienced Stuff</h4>
                                    <p>We have Experienced Professional Stuff to support your business</p>
                                </div>

                                <div data-aos="fade-down" data-aos-delay="150" className="card border-0 bg-transparent experienced__item">
                                    <div className="mb-2 experienced_item_icon">
                                        <i className="fas fa-microchip"></i>
                                    </div>
                                    <h4>Letest Technology</h4>
                                    <p>We are working Letest Technology to build your business secure.</p>
                                </div>
                            </div>

                        </div>
                        <div data-aos="fade-down" data-aos-delay="200" className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-5">
                            <img src={supportImg} className='w-100' alt="Support Image" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-5ho">
                            <div className="ps-4">
                                <div data-aos="fade-down" data-aos-delay="250" className="card border-0 bg-transparent mb-4 experienced__item">
                                    <div className="mb-2 experienced_item_icon">
                                        <i className="fas fa-user-shield"></i>
                                    </div>
                                    <h4>It Security Professionals</h4>
                                    <p>All are IT Security Professionals are ready to support you.</p>
                                </div>

                                <div data-aos="fade-down" data-aos-delay="300" className="card border-0 bg-transparent experienced__item">
                                    <div className="mb-2 experienced_item_icon">
                                        <i className="fas fa-user-secret"></i>
                                    </div>
                                    <h4>Certified Hacker</h4>
                                    <p>All are IT Security Professionals are ready to support you.</p>
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
