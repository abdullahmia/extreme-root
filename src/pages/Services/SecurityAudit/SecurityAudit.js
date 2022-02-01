import ServiceFeatures from "../SeviceFeatures/ServiceFeatures";
import ServiceTitle from "../ServiceTitle";
import bannerImg from '../../../media/images/banner.png';
import serviceAccordion from '../../../media/images/service_detail_accordion.jpg';
import '../services.css';
import Service from "../../../components/Service/Service";
import FeaturedTestimonial from "../Services/FeaturedTestimonial";

const SecurityAudit = () => {
    return (
        <div>
            <ServiceTitle title="Security Audit 📑" description="Capture the Flag requires a playing field of some sort. In both indoor and outdoor versions." />

            <div className="container wrapper">
                <div className="mt-5 row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-lg-0 mb-4">
                        <div className="service_banner_title">
                            <h2 data-aos="fade-down" data-aos-delay="100">About Security Audit</h2>
                            <p data-aos="fade-down" data-aos-delay="200">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>


                            <div className="mt-4 service_detail_counters">
                                <div data-aos="fade-down" data-aos-delay="300" className="service_detail_counter_item">
                                    <h1>100K</h1>
                                    <h6>Subscriber</h6>
                                </div>

                                <div data-aos="fade-down" data-aos-delay="400" className="service_detail_counter_item">
                                    <h1>500K+</h1>
                                    <h6>Client</h6>
                                </div>

                                <div data-aos="fade-down" data-aos-delay="500" className="service_detail_counter_item">
                                    <h1>98%</h1>
                                    <h6>Success</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="100" className="col-lg-6 col-md-12 col-sm-12 col-lg-0 mb-4">
                        <img src={bannerImg} alt="" className="w-100" />
                    </div>
                </div>
            </div>


            <div className="primary-bg wrapper">
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-down" data-aos-delay="100" className="col-lg-6 col-md-12 col-sm-12 col-12 mb-lg-0 mb-4">
                            <img style={{height: "500px"}} src={serviceAccordion} className="w-100" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-lg-0 mb-4">
                            <div className="service_detail_accordion">
                                <h2 data-aos="fade-down" data-aos-delay="100">Benefits With Our Service</h2>
                                <div className="accordion" id="accordionExample">

                                    <div data-aos="fade-down" data-aos-delay="200" className="accordion-item bg-transparent">
                                        <h2 className="accordion-header" id="item-1">
                                            <button className="accordion-button bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#itemOne" aria-expanded="true" aria-controls="itemOne">
                                                Affordable security packages
                                            </button>
                                        </h2>
                                        <div id="itemOne" className="accordion-collapse collapse show" aria-labelledby="item-1" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>


                                    <div data-aos="fade-down" data-aos-delay="300" className="accordion-item bg-transparent">
                                        <h2 className="accordion-header" id="item-2">
                                            <button className="accordion-button bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#itemTwo" aria-expanded="true" aria-controls="itemTwo">
                                                Providing expansions or Consolidations
                                            </button>
                                        </h2>
                                        <div id="itemTwo" className="accordion-collapse collapse" aria-labelledby="item-2" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                        </div>
                                    </div>

                                    <div data-aos="fade-down" data-aos-delay="400" className="accordion-item bg-transparent">
                                        <h2 className="accordion-header" id="item-3">
                                            <button className="accordion-button bg-transparent shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#itemThree" aria-expanded="true" aria-controls="itemThree">
                                                Best networking & security solutions
                                            </button>
                                        </h2>   
                                        <div id="itemThree" className="accordion-collapse collapse" aria-labelledby="item-3" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            </div>

            <div className="wrapper">
                <ServiceFeatures />
            </div>


            {/* Featured Testimonials */}
            <FeaturedTestimonial />

            {/* Other-Secvice-Sections */}
            <div className="container wrapper">                
                <div className="row">
                    <div className="col-12 text-center py-4">
                        <h2 data-aos="fade-down" data-aos-delay="100">Other Service</h2>
                    </div>
                </div>

                <div className="row mt-3">
                    <div data-aos="fade-down" data-aos-delay="200" className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-4">
                        <Service icon="fas fa-id-card" name="Security Audit" slug="database-security" />
                    </div>
                    <div data-aos="fade-down" data-aos-delay="300" className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-4">
                        <Service icon="fas fa-network-wired" name="Network Device Configuration Review" slug="internet-security" />
                    </div>
                    <div data-aos="fade-down" data-aos-delay="400" className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-4">
                        <Service icon="fas fa-user-shield" name="InfoSec Consultancy" slug="locker-security" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SecurityAudit;
