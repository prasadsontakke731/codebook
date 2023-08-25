import React from 'react'
import { Hero } from './components/Hero'
import { FeaturedProduct } from './components/FeaturedProduct'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonial'

export const HomePage = () => {
    return (
        <main>
            <Hero />
            <FeaturedProduct />
            <Testimonials />
            <Faq />
        </main>
    )
}