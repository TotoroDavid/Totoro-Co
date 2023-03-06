import React from 'react'
import {
    BlogPage,
    ContactPage,
    FAQPage,
    Footer,
    HomePage,
    NavBar,
    OurProcess,
    PortfolioPage,
    PricesPage,
    Promotion,
    ServicesPage,
    TeamPage,
    TestimonialsPage,
} from '../components/index';


export const LandingPage = () => {
    return (
        <div className=''>
            <HomePage />
            <ServicesPage />
            <PortfolioPage />
            <Promotion />
            <OurProcess />
            <TestimonialsPage />
            <FAQPage />
            <PricesPage />
            <BlogPage />
            <TeamPage />
            <ContactPage />
        </div>
    )
}
