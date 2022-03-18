import Service from '../../../components/Service/Service'
import './services.css'

const Services = () => {
    return (
        <div className='container'>
            <div className="wrapper-top">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 data-aos="fade-down" data-aos-delay="50">EXCLUSIVE <span>SERVICES</span></h2>
                        <hr data-aos="fade-down" data-aos-delay="100" className='service_title_line' />
                        <p data-aos="fade-down" data-aos-delay="150" className='mt-3'>There are many variations of passages of Lorem Ipsum available but the majority have <br /> suffered alteration in some injected humour</p>

                        <div className="mt-5 row">
                            <div data-aos="fade-down" data-aos-delay="100" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon='fas fa-flag' name='CTF' shortdescription='About ExtremeRoot Capture the Flag (CTF) CTF (Capture The Flag) is a kind of information security competition.....' link='/services/ctf' />
                            </div>

                            <div data-aos="fade-down" data-aos-delay="150" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon='fas fa-id-card' name='Security Audit' shortdescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta at in totam voluptatum quod culpa corrupti......' link='/services/security-audit' />
                            </div>

                            <div data-aos="fade-down" data-aos-delay="200" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-network-wired" name="Network Device Configuration Review" shortdescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta at in quod culpa corrupti......' link='/services/network-device-configuration-review' />
                            </div>

                            <div data-aos="fade-down" data-aos-delay="250" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-user-shield" name="InfoSec Consultancy" shortdescription='Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta at in quod culpa corrupti......' link='/services/infosec-consultancy' />
                            </div>

                            <div data-aos="fade-down" data-aos-delay="300" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fad fa-server" name="API PenTesting" shortdescription='API PenTesting is focused on exposing security vulnerabilities on the APIs your business......' link='/services/api-pen-testing' />
                            </div>

                            <div data-aos="fade-down" data-aos-delay="350" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-browser" name="Application PenTesting" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/application-pen-testing' />
                            </div>


                            {/* Extra add */}
                            <div data-aos="fade-down" data-aos-delay="400" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-browser" name="Secure Network Architecture Design, Implementation and Assurance" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/application-pen-testing' />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="450" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-browser" name="Security Operation Center Implementation" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/application-pen-testing' />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="500" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-browser" name="Application PenTesting" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/application-pen-testing' />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="550" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-browser" name="Application PenTesting" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/application-pen-testing' />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="600" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-browser" name="Application PenTesting" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/application-pen-testing' />
                            </div>
                            <div data-aos="fade-down" data-aos-delay="650" className="col-lg-4 col-md-6 col-12 mb-4">
                                <Service icon="fas fa-browser" name="Application PenTesting" shortdescription='Penetration Testing can be a safe practice where cyber security expert tries to detect and......' link='/services/application-pen-testing' />
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
