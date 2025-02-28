import { useEffect, useState } from 'react';
import SectionHot from './SectionHot';
import SectionDeals from './SectionDeals';



export default function SectionAllProducts() {

    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Agnieska125/99c624b0c8fb8be8ef546941e77297ee/raw/23d319cd6a7b79a7cad2bed63b2509b6fa7c3984/plants.json');
                const data = await response.json();
                console.log(data);

                const allProductsWithImages = await Promise.all(data.map(async (product) => {
                    let imagePath;
                    try {
                        imagePath = await import(`../img/plantsData/${product.image}`);
                    }
                    catch (error) {
                        imagePath = await import(`../img/plantsData/empty.svg`);
                    }

                    return {
                        ...product,
                        imageSrc: imagePath.default,
                    };
                }));
                console.log(allProductsWithImages);
                setAllProducts(allProductsWithImages);
            } catch (error) {
                console.error('Klaida gaunant visas prekes', error);
            }
        };
        fetchAllProducts();
    }, []);


    return (
        <>
            <SectionHot allProducts={allProducts} />
            <SectionDeals allProducts={allProducts} />
        </>
    )
}