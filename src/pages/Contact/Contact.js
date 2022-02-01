import {useEffect} from 'react'
import AddressItem from './AddressItem/AddressItem';
import './contact.css';
import ContactForm from './ContactForm/ContactForm';
import GoogleMap from './GoogleMap/GoogleMap';

const address_data = [
    {
        icon: `far fa-home-lg-alt`,
        name: "Ubud",
        address: "Jl. Raya Ubud No.88, Bali - 80571"
    },
    {
        icon: `far fa-home-lg-alt`,
        name: "Denpasar",
        address: "Jl. Raya Ubud No.88, Bali - 80571"
    },
    {
        icon: `far fa-phone-alt`,
        name: "Call Us",
        address: "7658439244"
    },
    {
        icon: `far fa-envelope`,
        name: "Email Address",
        address: "support@extremeroot.com"
    }
]

const Contact = () => {
    useEffect(() => {
        document.title = "Contact us"
    }, [])
    return (
        <>
            <div className='container'>
                <div className="text-center page__title">
                    <h2 data-aos="fade-down" data-aos-delay="50">Contact Us</h2>
                    <p data-aos="fade-down" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12 mb-lg-0 mb-4 pe-5">
                                <h6 data-aos="fade-down" data-aos-delay="100">Contact Us</h6>
                                <h2 data-aos="fade-down" data-aos-delay="200">Get In Touch</h2>
                                <p data-aos="fade-down" data-aos-delay="300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation</p>
                                <div className="mt-5 row px-lg-0 px-4">
                                    <div data-aos="fade-down" data-aos-delay="400" className="col-lg-6 mb-4">
                                        <AddressItem icon={"far fa-home-lg-alt"} name={"Ubud"} address={"Jl. Raya Ubud No.88, Bali - 80571"} />
                                    </div>

                                    <div data-aos="fade-down" data-aos-delay="500" className="col-lg-6 mb-4">
                                        <AddressItem icon={"far fa-home-lg-alt"} name={"Denpasar"} address={"Jl. Raya Ubud No.88, Bali - 80571"} />
                                    </div>

                                    <div data-aos="fade-down" data-aos-delay="600" className="col-lg-6 mb-4">
                                        <AddressItem icon={"far fa-phone-alt"} name={"Call Us"} address={"7658439244"} />
                                    </div>

                                    <div data-aos="fade-down" data-aos-delay="700" className="col-lg-6 mb-4">
                                        <AddressItem icon={"far fa-envelope"} name={"Email Address"} address={"support@extremeroot.com"} />
                                    </div>
                                    
                                </div> 
                            </div> 
                            <div data-aos="fade-down" data-aos-delay="200" className="col-lg-6 col-md-12 col-12 ps-lg-5 px-3">
                                <ContactForm />
                            </div>     
                        </div>
                    </div>
                </div>
            </div>


            <GoogleMap />
        
        </>
    )
}

export default Contact
