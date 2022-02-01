import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './projectcounter.css';

const ProjectCounter = () => {
    return (
        <div className="wrapper project_counter">
            <div className="container">
                <div className="row align-items-center">
                    <div data-aos="fade-down" data-aos-delay="100" className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-3">
                        <div className="text-center counter__item">
                            <i class="fas fa-computer-speaker"></i>
                            <h2>
                                <CountUp end={100} duration={2.75} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span style={{color: "#AEB7BB"}} ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> + 
                            </h2>
                            <h6>HOSTS</h6>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="200" className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-3">
                        <div className="text-center counter__item">
                            <i class="fad fa-browser"></i>
                            <h2>
                                <CountUp end={15} duration={2.75} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span style={{color: "#AEB7BB"}} ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> + 
                            </h2>
                            <h6>Applications</h6>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="300" className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-3">
                        <div className="text-center counter__item">
                            <i class="fas fa-flag"></i>
                            <h2>
                                <CountUp end={8} duration={2.75} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span style={{color: "#AEB7BB"}} ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> + 
                            </h2>
                            <h6>CTF</h6>
                        </div>
                    </div>
                    <div data-aos="fade-down" data-aos-delay="400" className="col-lg-3 col-md-6 col-sm-12 col-12 mb-lg-0 mb-3">
                        <div className="text-center counter__item">
                            <i class="fas fa-chart-network"></i>
                            <h2>
                                <CountUp end={2000} duration={2.75} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span style={{color: "#AEB7BB"}} ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp> + 
                            </h2>
                            <h6>PARTICIPANTS</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCounter
