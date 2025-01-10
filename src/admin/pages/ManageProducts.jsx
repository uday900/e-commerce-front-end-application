import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ManageProducts = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // Fetch categories from the endpoint
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleNewCategory = () => {
    const newCategoryName = prompt("Enter a new category name ");

    if (newCategoryName && newCategoryName.trim() !== '') {
      axios.post('http://localhost:4000/categories', { name: newCategoryName })
        .then((response) => {
          console.log('Category created:', response.data);
          // navigate('/admin/products/' + newCategoryName);
        })
        .catch((error) => {
          console.error('Error creating category:', error);
        });
    }

  }

  return (
    <div className="p-6">
      {/* Buttons Section */}
      <div className="flex gap-4 mb-6">
        <button
          className="primary-button"
          onClick={() => navigate('/admin/add-product')}
        >
          Add Product
        </button>
        <button className="primary-button"
        onClick={()=> handleNewCategory()}
        >Add New Category</button>
      </div>

      {/* Categories Section */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-4">Available Categories</h3>
        <div className="flex justify-start gap-4">
          {categories.map((category, index) => {
            return <div>
              <button
              key={index}
              className="secondary-button"
              onClick={() => navigate(`/admin/products?id=${category.id}&name=${category.name}`)}
            >
              {category.name}
            </button>
              </div>
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
