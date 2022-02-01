import { Link } from 'react-router-dom';
import notFound from '../../media/images/notfound.png';
import './notfound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className="notfound_box">
                <img src={notFound} loading="lazy" className='w-100' alt="" />
                <div className="text-center notfound_text">
                    <h4>Ops. Page not found</h4>
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
