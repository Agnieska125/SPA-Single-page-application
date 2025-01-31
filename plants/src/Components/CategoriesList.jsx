import { useEffect, useState } from 'react'
import Category from './Category'
import './Style/CategoriesList.css'

export default function CategoriesList() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/Agnieska125/29f7fb795d5b505014a56c028f259302/raw/b0e65eb979ce7712c8d65bb4e7cadc68f8f36827/shop.json');
                const data = await response.json();
                console.log(data);

                const categoriesWithImages = await Promise.all(data.map(async (category) => {
                    const imagePath = await
                        import(`../Images/category/${category.fileName}`);
                    return {
                        ...category,
                        imageSrc: imagePath.default,
                    };
                }));
                setCategories(categoriesWithImages);
            } catch (error) {
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className='categories-list'>
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        imageSrc={category.imageSrc}
                        title={category.title}
                    />
                ))
            }
        </div>
    )
}