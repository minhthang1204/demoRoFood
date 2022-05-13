import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
// import Section, { SectionTitle, SectionBody } from '../components/Section'
// import PolicyCard from '../components/PolicyCard'
import Grid from '../components/Grid'
// import ProductCard from '../components/ProductCard'

import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'



const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* hero slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={false}
                timeOut={5000}
            />        
        </Helmet>
    )
}

export default Home
