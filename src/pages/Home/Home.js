import {useEffect} from 'react'
import ProjectCounter from '../../components/ProjectCounter/ProjectCounter'
import Reviews from '../../components/Reviews/Reviews'
import ChooseUs from './ChooseUs/ChooseUs'
import Hero from "./Hero/Hero"
import Services from "./Services/Services"

const Home = () => {
    useEffect(()=> {
        document.title = "Extreme Root"
    }, [])
    return (
        <div>
            <Hero />
            <Services />
            <ChooseUs />
            <ProjectCounter />
            <Reviews />
        </div>
    )
}

export default Home
