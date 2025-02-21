import './Style/SocialMenu.css';
import fb from '../Images/social/facebook.svg'
import ig from '../Images/social/instagram.svg'
import link from '../Images/social/linkedin.svg'
import tw from '../Images/social/twitter.svg'
import yb from '../Images/social/youtube.svg'

export default function SocialMenu() {
    return (
        <div className='wrapper social-menu'>
            <nav className='social-menu-links'>
                <a href='#w'><img src={yb} alt="youtube" /></a>
                <a href='#e'><img src={fb} alt="fb" /></a>
                <a href='#r'><img src={tw} alt="twitter" /></a>
                <a href='#r'><img src={ig} alt="instagram" /></a>
                <a href='#r'><img src={link} alt="likedin" /></a>
            </nav>
        </div>
    )
}