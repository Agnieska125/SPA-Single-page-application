import { useEffect, useState } from 'react'
import './Style/SectionAllProduct.css'
import SectionHot from './SectionHot';


export default function SectionAllProduct() {

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
                        imagePath = await import(`../Images/plantsData/${product.fileName}`);
                    }
                    catch (error) {
                        imagePath = await import(`../Images/plantsData/empty.svg`);
                    }

                    return {
                        ...product,
                        imageSrc: imagePath.default,
                    };
                }));
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
        </>
    )
}