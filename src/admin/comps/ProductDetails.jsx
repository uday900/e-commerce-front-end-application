import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const [product, setProduct] = useState(null);

  
  useEffect(() => {
    // Fetch the product details from the backend
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/product/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        // setError("Product not found or failed to fetch data.");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center">Product not found!</div>;
  }

  return (
    <div className="container my-5">
  <h2 className="text-center mb-5 display-6 fw-bold">{product.name}</h2>
  <div className="row g-4 align-items-center">
    {/* Product Image */}
    <div className="col-md-6 text-center">
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid rounded shadow-sm"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    {/* Product Details */}
    <div className="col-md-6">
      <h4 className="mb-3">Description</h4>
      <p className="text-muted">{product.description}</p>
      <ul className="list-unstyled">
        <li className="mb-2">
          <strong>Price:</strong> <span className="text-primary">₹{product.price}</span>
        </li>
        <li className="mb-2">
          <strong>Category:</strong> {product.category}
        </li>
        <li className="mb-2">
          <strong>Brand:</strong> {product.brand}
        </li>
        <li className="mb-2">
          <strong>Rating:</strong> {product.rating} ({product.totalRatings} ratings)
        </li>
        <li className="mb-2">
          <strong>Available Sizes:</strong>{" "}
          <span className="badge bg-light text-dark mx-1">
            {product.sizes}
          </span>
        </li>
        <li>
          <strong>Colors:</strong>{" "}
          {product.colors  }

        </li>
      </ul>
    </div>
  </div>
</div>

  );
};

export default ProductDetails;
