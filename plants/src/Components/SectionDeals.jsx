import DealsCardList from './DealsCardList';
import './Style/SectionDeals.css'
import Title from "./Title";

export default function SectionDeals({ allProducts }) {
    return (
        <div className='deals-bg'>
            <div className="wrapper hot-section">
                <Title text1='Ferntastic ' text2='Deals' showLink={true} />
                <DealsCardList allProducts={allProducts} />
            </div>
        </div>

    )
}