import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Review from './Review';


const Reviews = () => {
    const sliderSettings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="wrapper primary-bg">
            <div data-aos="fade-down" data-aos-delay="100" className="container">
                <Slider {...sliderSettings}>
                    <Review />
                    <Review />
                    <Review />
                </Slider>
            </div>
        </div>
    )
}

export default Reviews
