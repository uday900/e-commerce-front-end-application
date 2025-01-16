import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function CategoryProducts() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products based on the category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/categories/1`);
        setProducts(response.data.products);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [id]);



  // Remove category handler
  const handleRemoveCategory = async () => {
    if (window.confirm(`Are you sure you want to delete the category "${name}"?`)) {
      try {
        await axios.delete(`http://localhost:4000/categories/${name}`);
        alert('Category removed successfully!');
        navigate('/categories'); // Redirect to categories page
      } catch (error) {
        console.error('Error removing category:', error);
        alert('Failed to remove the category.');
      }
    }
  };

  // Rename category handler
  const handleRenameCategory = async (categoryId, currentCategoryName) => {
    const newCategoryName = prompt(`Enter a new name for the category "${currentCategoryName}":`);
    if (newCategoryName && newCategoryName.trim() !== '') {
      try {
        const newCategory = {
            id: categoryId,
          name: newCategoryName,
        }
        // Update the category name using its ID
        await axios.put(`http://localhost:4000/categories/${categoryId}`, newCategory ,
            {
                headers:{
                    "Content-Type": "application/json",
                }
            }
        );
        // Update the category name in the products array
    
        alert('Category renamed successfully!');
        navigate(`/products/${newCategoryName}`); // Redirect to the updated category
      } catch (error) {
        console.error('Error renaming category:', error);
        alert('Failed to rename the category.');
      }
    }
  };
  

  return (
    <div className="p-6">
      

      {/* Category Products */}
      <div className="flex mb-4">

      <h2 className="text-2xl font-bold ">Products in {name} Category</h2>
      {/* Top Buttons */}
      <div className="flex gap-4 text-center">
        <button
          className=" text-black px-1"
          onClick={ ()=> handleRenameCategory(id,  name) }
        >
           <i class="fa-solid fa-pencil"></i> 
        </button>
        <button
          className="text-black"
          onClick={ ()=> handleRemoveCategory(id)}
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>

      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4 hover:underline cursor-pointer">{product.name}</h3>
            <p className="text-gray-700 mt-2">Price: ${product.price}</p>
            <button
              className="primary-button mt-1"
              onClick={() => alert(`Product: ${product.name}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
