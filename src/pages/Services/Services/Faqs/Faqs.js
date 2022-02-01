import './faq.css';
import FaqItem from './FaqItem';

const Faqs = () => {
    return (
        <div className='primary-bg wrapper'>
            <div className="container">
                <h2 data-aos="fade-down" data-aos-delay="100">Frequently Asked Questions</h2>

                <div className="mt-5 row">
                    <div data-aos="fade-down" data-aos-delay="200" className="col-lg-6 col-md-12 col-sm-12 mb-4">
                        <FaqItem title="What are the objective of this service?" />
                    </div>

                    <div data-aos="fade-down" data-aos-delay="300" className="col-lg-6 col-md-12 col-sm-12 mb-4">
                        <FaqItem title="What is cyber security?" />
                    </div>

                    <div data-aos="fade-down" data-aos-delay="400" className="col-lg-6 col-md-12 col-sm-12 mb-4">
                        <FaqItem title="How to try this cyber service?" />
                    </div>

                    <div data-aos="fade-down" data-aos-delay="500" className="col-lg-6 col-md-12 col-sm-12 mb-4">
                        <FaqItem title="How to pay for this?" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faqs
