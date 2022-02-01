import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Service from '../../components/Service/Service';
import './singleservice.css';

const ServiceData = [
    {
        icon: "fal fa-chart-network",
        name: "Network Security",
        shortdescription: "",
        slug: "network-security",
        image: "https://i.imgur.com/QPov3mJ.jpg"
    },
    {
        icon: "fas fa-database",
        name: "Database Security",
        shortdescription: "",
        slug: "database-security",
        image: "https://i.imgur.com/g9qvYMi.jpg"
    },
    {
        icon: "fas fa-globe-americas",
        name: "Internet Security",
        shortdescription: "",
        slug: "internet-security",
        image: "https://i.imgur.com/GD5hyOR.png"
    },
    {
        icon: "far fa-shield-check",
        name: "Locker Security",
        shortdescription: "",
        slug: "locker-security",
        image: "https://i.imgur.com/oY1k8WU.jpg"
    },
    {
        icon: "far fa-user-lock",
        name: "Data Security",
        shortdescription: "",
        slug: "data-security",
        image: "https://i.imgur.com/IJQaz2F.jpg"
    },
    {
        icon: "far fa-cloud-upload-alt",
        name: "Cloud Security",
        shortdescription: "",
        slug: "cloud-security",
        image: "https://i.imgur.com/VOIjtjL.jpg"
    }
]

const SingleService = () => {
    const {name} = useParams();
    const service = ServiceData.find(item => item.slug === name);
    useEffect(() => {
        document.title = service.name;
    } ,[service.name])
    return (
        <>
            <div className='container'>
                <div className="text-center service__title">
                    <h2>{service.name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>

            <div className="py-5 service_detail_section">
                <div className='container'>
                    <div className='row'>

                        <div className='col-lg-6 col-md-12 col-12'>
                            <img src={service.image} className='w-100' alt={service.name} />
                        </div>

                        <div className='col-lg-5 col-md-12 col-12'>
                            <div className='service_detail'>
                                <h3>{service.name}</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  

                                    <br />
                                    <br />


                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                <div className="mt-5">
                    <h4>Our more service</h4>

                    <div className="row mt-4">

                        {
                            ServiceData.slice(0, 3).map((data, key) => (
                                <div key={key} className="col-lg-4 col-md-12 col-12">
                                    <Service data={data} />
                                </div>
                            ))
                        }

                        
                    </div>

                </div>
            </div>


            </div>
        </>
    )
}

export default SingleService
