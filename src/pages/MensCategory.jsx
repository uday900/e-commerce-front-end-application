import React from 'react'
import Navbar from '../components/Navbar'
import FilterSidebar from '../components/FilterSidebar';
import { mens } from '../mock-data/mens';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function MensCategory() {

    return <>
        <Navbar />


        <div className="flex">
            <FilterSidebar />

            <div className="w-3/4 py-4 px-10">
                <div className="flex justify-between mb-4">
                    <h2 className="font-bold text-xl">Mens Clothing</h2>
                    <div className="flex gap-4">
                        <button className="text-purple-500">New</button>
                        <button>Recommended</button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {mens.map((product, index) => (
                        <Card key={index} product={product} />
                        // <ProductCard key={index} {...product} />
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default MensCategory