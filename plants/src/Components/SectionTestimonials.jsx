import './Style/SectionTestimonials.css';
import { useEffect, useState } from 'react';
import TestimonialsList from './TestimonialsList';

export default function SectionTestimonials() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchAllTestimonials = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Agnieska125/16841ec2b7271f1a0bc1216f16fa83ef/raw/db190c36737d9501a38b9bc686c8a8a6b8979bdc/clients.json');
                const data = await response.json();
                console.log(data);

                const allTestimonialsWithImages = await Promise.all(data.map(async (testimonial) => {
                    let imagePath;
                    try {
                        imagePath = await import(`../img/clients/${testimonial.img}`);
                    }
                    catch (error) {
                        imagePath = await import(`../img/clients/clear.jpg`);
                    }

                    return {
                        ...testimonial,
                        imageSrc: imagePath.default,
                    };
                }));
                console.log(allTestimonialsWithImages);
                setTestimonials(allTestimonialsWithImages);
            } catch (error) {
                console.error('Klaida gaunant visus atsiliepimus', error);
            }
        };
        fetchAllTestimonials();
    }, []);




    return (
        <div className="light-bg">
            <div className="wrapper testimonials-section">
                <h2 className='test-title'>Testimonials</h2>
                <p className='test-text'>Plant parents love us</p>
                <TestimonialsList testimonials={testimonials} />
            </div>
        </div>

    );
}