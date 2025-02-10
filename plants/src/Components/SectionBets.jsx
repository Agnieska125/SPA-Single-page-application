
import BestCardList from './BestCardList';
import './Style/SectionBest.css'
import Title from "./Title";

export default function SectionBest() {
    return (
        <div className="wrapper best-section">
            <Title text1='Best ' text2='Selling' showLink={true} />
            <BestCardList />
        </div>
    )
}