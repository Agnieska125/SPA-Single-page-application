import Hero from "../Components/Hero";
import SectionCategories from "../Components/SectionCategories";

import SectionAllProducts from "../Components/SectionAllProduct";
import SectionTestimonials from "../Components/SectionTestimonials";

import SectionBest from "../Components/SectionBest";

export default function HomePage() {
    return (
        <>
            <Hero />
            <SectionCategories />
            <SectionBest />
            <SectionAllProducts />
            <SectionTestimonials />

        </>
    )
}
