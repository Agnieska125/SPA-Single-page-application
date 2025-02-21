
import FooterBaner from './FooterBaner'
import SecondMenu from './SecondMenu'
import SocialMenu from './SocialMenu'
import './Style/SectionFooter.css'


export default function SectionFooter() {
    return (
        <section className='footer'>
            <SecondMenu />
            <SocialMenu />
            <FooterBaner />
        </section>

    )
}