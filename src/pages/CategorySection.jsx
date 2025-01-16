import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import FilterSidebar from '../components/FilterSidebar';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card';
import axios from 'axios';

function CategorySection() {

    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products');
                setProducts(response.data);
                console.log('Products from back-end:', response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return <>
        <Navbar />


        <div className="flex">
            <FilterSidebar />

            <div className="w-3/4 py-4 px-4">
                <div className="flex justify-between mb-4">

                    <nav className="text-sm text-gray-500">
                        <ol className="list-reset flex">
                            <li className="mr-2">Products</li>
                            <li className="mr-2">&gt;</li>
                            <li className="text-gray-800 font-medium">{category}</li>
                        </ol>

                    </nav>
                    <div className="flex gap-4">
                        <button className="text-purple-500">New</button>
                        <button>Recommended</button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <Card key={index} product={product} category={category} />

                    ))}
                </div>
            </div>
        </div>
    </>
}

export default CategorySection