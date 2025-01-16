import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';

const ProductDetails = () => {
  const { id, category } = useParams(); // Get the product ID and category from URL params
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the product details from the backend
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      alert("Product deleted successfully!");
      // window.location.href = "/admin/manage-products";
      navigate('/admin/dashboard')
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  function onConfirm(isConfirmed) {
    if (isConfirmed) {
      handleDelete(id);
    }
    setIsModalOpen(false);
  }

  const handleUpdate = () => {
    // window.location.href = `/admin/update-product/${id}`;
    navigate(`/admin/update-product/${id}`);
  };

  if (!product) {
    return <div className="text-center text-red-500 font-bold">Product not found!</div>;
  }

  return (
    <>
    <div className="container mx-auto my-1 px-4">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-5">
        <ol className="list-reset flex">
          <li className="mr-2">Products</li>
          <li className="mr-2">&gt;</li>
          <li className="text-gray-800 font-medium">{category}</li>
        </ol>
      </nav>

      {/* Product Title */}
      <div className='flex mb-4'>
      <h2 className="text-2xl font-bold mr-4">{product.name}</h2>
      
      <div className='flex gap-2'>
      <button onClick={()=> handleUpdate()} ><i class="fa-solid fa-pencil"></i></button>
      <button onClick={()=> setIsModalOpen(true)}> <i class="fa-solid fa-trash-can"></i></button>
      </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
       

        {/* Product First Image */}
        <div className="col-span-full">
          <img
            src={product.images && product.images.length > 0 ? product.images[0] : product.image}
            alt={product.name}
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="text-gray-800">
          <h4 className="text-lg font-semibold mb-3">Description</h4>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <ul className="list-none space-y-2">
            <li>
              <strong>Price:</strong> <span className="text-blue-600">₹{product.price}</span>
            </li>
            <li>
              <strong>Category:</strong> {product.category}
            </li>
            <li>
              <strong>Brand:</strong> {product.brand}
            </li>
            <li>
              <strong>Rating:</strong> {product.rating} ({product.totalRatings} ratings)
            </li>
            <li>
              <strong>Available Sizes: </strong>{product.sizes}
              {/* {product.sizes && product.sizes.map((size, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-1">
                  {size}
                </span>
              ))} */}
            </li>
            <li>
              <strong>Colors: </strong>{product.colors}
              {/* {product.colors && product.colors.map((color, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-1">
                  {color}
                </span>
              ))} */}
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    { isModalOpen && <ConfirmationModal setIsModalOpen={setIsModalOpen} onConfirm={onConfirm} message = {"are you sure do you want to delete this product"} />}   
    </>
  );
};

export default ProductDetails;
