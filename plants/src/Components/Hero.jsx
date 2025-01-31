import './Style/Hero.css';
import RightBg from '../Images/image 21.svg';
import LeftBg from '../Images/image 22.png';

export default function Hero() {
    return (
        <>
            <div className="hero-bg">
                <div className='wrapper'>
                    <img className='right-bg' src={RightBg} alt="bg" />
                    <img className='left-bg' src={LeftBg} alt="bg" />
                    <div className="hero-container">
                        <div className='hero-text-container'>
                            <h1>Plants are our Passion</h1>
                            <p>Even if you don’t have a green thumb, you can still have a green home.</p>
                        </div>
                        <button className='hero-btn'>Get Planting</button>
                    </div>

                </div>
            </div>
            <div className='green-line-hero'></div>
        </>
    )
}