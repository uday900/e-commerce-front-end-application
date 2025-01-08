import React from "react";

const FilterSidebar = () => {
    return (
        <div className="w-1/4 p-4 border border-solid border-gray-200 mx-10 my-4">
            <h2 className="font-bold text-lg mb-4">Filter</h2>

            {/* Categories */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Categories</h3>
                <ul className="space-y-1">
                    <li><input type="checkbox" /> <label>Tops</label></li>
                    <li><input type="checkbox" /> <label>Printed T-shirts</label></li>
                    <li><input type="checkbox" /> <label>Plain T-shirts</label></li>
                    <li><input type="checkbox" /> <label>Kurti</label></li>
                    <li><input type="checkbox" /> <label>Boxers</label></li>
                    <li className="text-purple-500 cursor-pointer">+ 20 more</li>
                </ul>
            </div>

            {/* Price */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Price</h3>
                <input type="range" min="70" max="600" className="w-full" />
                <div className="flex justify-between text-sm mt-1">
                    <span>$70</span>
                    <span>$600</span>
                </div>
            </div>

            {/* Colors */}
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Colors</h3>
                <div className="grid grid-cols-6 gap-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-navy-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </div>
            </div>

            {/* Size */}
            <div>
                <h3 className="font-semibold mb-2">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                    <button className="border px-2 py-1">XXS</button>
                    <button className="border px-2 py-1">XS</button>
                    <button className="border px-2 py-1">S</button>
                    <button className="border px-2 py-1">M</button>
                    <button className="border px-2 py-1">L</button>
                    <button className="border px-2 py-1">XL</button>
                    <button className="border px-2 py-1">XXL</button>
                    <button className="border px-2 py-1">4XL</button>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
