import { useEffect, useState } from 'react';
import './Style/BestCardList.css';
import BestCard from './BestCard';

export default function BestCardList() {

    const [bestcards, setBestCards] = useState([]);

    useEffect(() => {
        const fetchBestCards = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Agnieska125/54d4861858587d2429f8c2463e61006c/raw/a6e44d74c62626e69ceeecfffed1091509484b30/bestSelling.json');
                const data = await response.json();
                console.log(data);

                const bestCardsWithImages = await Promise.all(data.map(async (bestCard) => {
                    const imagePath = await
                        import(`../img/bestSelling/${bestCard.fileName}`);
                    return {
                        ...bestCard,
                        imageSrc: imagePath.default,
                    };
                }));
                console.log(bestCardsWithImages);
                setBestCards(bestCardsWithImages);
            } catch (error) {
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchBestCards();
    }, []);


    return (
        <div className='best-cards-list'>
            {
                bestcards.map((card) => (
                    <BestCard
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title={card.title}
                    />
                ))
            }
        </div>
    )
}