import {useForm} from 'react-hook-form';
import './contactForm.css';

const ContactForm = () => {
    const {handleSubmit, reset, register} = useForm();

    const handleContactMessage = data => {
        console.log(data);
        reset();
    }

    return (
        <div className='card p-5 bg-transparent contact_form_box'>
            <form onSubmit={handleSubmit(handleContactMessage)} className='contact__form'>
                <div className="mb-4">
                    <input type="text" {...register('name')} placeholder="Your Name" className="form-control shadow-none border-0" required />
                </div>
                <div className="mb-4">
                    <input type="email" {...register('email')} placeholder="Your Email" className="form-control shadow-none border-0" required />
                </div>
                <div className="mb-4">
                    <input type="text" {...register('subject')} placeholder="Your Subject" className="form-control shadow-none border-0" required />
                </div>
                
                <div className="mb-4">
                    <textarea cols="30" rows="4" {...register('message')} className="form-control shadow-none border-0">Your Message</textarea>
                </div>
                <button type="submit" className="main-btn">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm
