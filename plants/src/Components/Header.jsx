import './Style/Header.css';
import Logo from '../Images/Logo.svg';
import Search from '../Images/Search.svg';
import Vector from '../Images/Vector.svg';

export default function Header() {
    return (
        <div className='header-bg'>
            <div className="wrapper header">

                <a href="#">
                    <img src={Logo} alt="" />
                </a>

                <div className='header-links'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                </div>

                <div className='header-right'>
                    <input type="text" placeholder='Search' />
                    <img src={Search} alt="search" />
                    <a href="#" className='shopcart'><img src={Vector} alt="search" /> 3</a>
                </div>


            </div>
        </div>
    )
}