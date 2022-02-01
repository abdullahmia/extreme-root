import reviewer from '../../../media/images/services/reviewer.png';
import testimonialLogo1 from '../../../media/images/services/service-detail-testimonial-1.png';
import testimonialLogo2 from '../../../media/images/services/service-detail-testimonial-2.png';

const FeaturedTestimonial = () => {
    return (
        <div className='primary-bg wrapper'>            
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 lg-mb-0 lg-3">
                        <div className="pt-4 service_detail_testimonial">
                            <h2 data-aos="fade-down" data-aos-delay="100">Client Testimonial</h2>
                            <p data-aos="fade-down" data-aos-delay="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus mattis urna nec convallis. Vestibulum at fermentum magna. Suspendisse pretium</p>

                            <div data-aos="fade-down" data-aos-delay="300" style={{gap: "30px"}} className="py-4 d-flex align-items-center">
                                <img style={{width: "150px"}} src={testimonialLogo1} alt="" />
                                <img style={{width: "150px"}} src={testimonialLogo2} alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 lg-mb-0 lg-3">
                        <div className="p-5 service_detail_testimonial_review">
                            <h4 data-aos="fade-down" data-aos-delay="100">Very Good Work Shown By This Company To Solve Cyber Problems</h4>
                            <p data-aos="fade-down" data-aos-delay="200" className="pt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>

                            <div data-aos="fade-down" data-aos-delay="300" className="py-3 d-flex align-items-center gap-25">
                                <div>
                                    <img src={reviewer} alt="" />
                                </div>
                                <div>
                                    <h3>Hanna Sajira</h3>
                                    <p>CEO KeepFund.it</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default FeaturedTestimonial;
