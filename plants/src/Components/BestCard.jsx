import './Style/BestCard.css';

import Button from "./Button";

export default function BestCard({ imageSrc, title }) {
    return (
        <div className='best-card'>
            <a href='#bestcard' className='best-card-link'>
                <img className='best-img' src={imageSrc} alt={title} />
                <div className='best-overlay'>
                    <h3 className='best-title'>{title}</h3>
                </div>
            </a>
            <Button className='green-btn'>Shop Now</Button>
        </div>
    )
}