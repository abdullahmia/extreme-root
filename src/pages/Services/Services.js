import Service from "../../components/Service/Service";
import ServiceTitle from "./ServiceTitle"
import ChooseUs from "./Services/ChooseUs/ChooseUs";
import Faqs from "./Services/Faqs/Faqs";
import FeaturedTestimonial from "./Services/FeaturedTestimonial";

const Services = () => {
    return (
        <div>
            <ServiceTitle title="Our Services" description="Capture the Flag requires a playing field of some sort. In both indoor and outdoor versions." />

            {/* All Services */}
            <div className="container wrapper">
                <div className="mt-5">
                    <div className="row">
                        <div className="col-lg-6 text-center m-auto">
                            <h2 data-aos="fade-down" data-aos-delay="300">Cyber Security Solutions</h2>
                            <p data-aos="fade-down" data-aos-delay="350">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                        </div>
                    </div>

                    <div className="mt-5 row">
                        <div data-aos="fade-down" data-aos-delay="200" className="col-lg-4 col-md-6 col-12 mb-4">
                            <Service icon='fas fa-flag' name='CTF' shortdescription='About ExtremeRoot Capture the Flag (CTF) CTF (Capture The Flag) is a kind of information security competition.....' link='/services/ctf' />
                        </div>

                        <div data-aos="fade-down" data-aos-delay="400" className="col-lg-4 col-md-6 col-12 mb-4">
                            <Service icon='fas fa-id-card' name='Security Audit' shortdescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta at in totam voluptatum quod culpa corrupti......' link='/services/ctf' />
                        </div>

                        <div data-aos="fade-down" data-aos-delay="500" className="col-lg-4 col-md-6 col-12 mb-4">
                            <Service icon="fas fa-network-wired" name="Network Device Configuration Review" shortdescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta at in quod culpa corrupti......' link='/services/ctf' />
                        </div>

                        <div data-aos="fade-down" data-aos-delay="600" className="col-lg-4 col-md-6 col-12 mb-4">
                            <Service icon="fas fa-user-shield" name="InfoSec Consultancy" shortdescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta at in quod culpa corrupti......' link='/services/ctf' />
                        </div>

                        <div data-aos="fade-down" data-aos-delay="700" className="col-lg-4 col-md-6 col-12 mb-4">
                            <Service icon="fad fa-server" name="API PenTesting" shortdescription='API PenTesting is focused on exposing security vulnerabilities on the APIs your business......' link='/services/ctf' />
                        </div>

                        <div data-aos="fade-down" data-aos-delay="800" className="col-lg-4 col-md-6 col-12 mb-4">
                            <Service icon="fas fa-browser" name="Application PenTesting" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/ctf' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Choose Us */}
            <ChooseUs />

            {/* Featured Testimonial */}
            <FeaturedTestimonial name='abir' />

            {/* Faq Section */}
            <Faqs />
        </div>
    )
}

export default Services;