import React, { useState } from "react";
import axios from "axios";

function TestApp() {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
  });
  const [image, setImage] = useState(null); // Separate state for image
  const [productId, setProductId] = useState("");
  const [fetchedProduct, setFetchedProduct] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Update the image state separately
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("name", productData.name);
    // formData.append("description", productData.description);
    formData.append("image", image); // Append image separately
    formData.append("product", new Blob([JSON.stringify(productData)]), { type: "application/json" })

    try {
      const response = await axios.post("http://localhost:8080/api/products/add", formData,{
        headers: {
            "Content-Type": "multipart/form-data",
          },    
        }
      );
      alert("Product added successfully!");
      console.log(response.data);
      // Reset productData and image after successful submission
      setProductData({ name: "", description: "" });
      setImage(null);
    } catch (error) {
      console.error(error);
      alert("Error adding product.");
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products/${productId}`);
      const data = response.data;

      // Set fetched product with base64 image
      setFetchedProduct({
        ...data,
        image: data.image ? `data:image/jpeg;base64,${data.image}` : null,
      });
    } catch (error) {
      console.error(error);
      alert("Error fetching product.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-6">Product Management</h1>

      {/* Add Product Form */}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={productData.name}
            onChange={handleInputChange}
            className="block w-full border p-2 rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={productData.description}
            onChange={handleInputChange}
            className="block w-full border p-2 rounded-lg"
            required
          ></textarea>
          <input
            type="file"
            onChange={handleImageChange}
            className="block w-full"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add Product
          </button>
        </form>
      </div>

      {/* Fetch Product Form */}
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Fetch Product</h2>
        <input
          type="text"
          placeholder="Enter Product ID"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="block w-full border p-2 rounded-lg"
        />
        <button
          onClick={fetchProduct}
          className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Fetch Product
        </button>

        {/* Display the fetched product */}
        {fetchedProduct && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold">Product Details:</h3>
            <p><strong>Name:</strong> {fetchedProduct.name}</p>
            <p><strong>Description:</strong> {fetchedProduct.description}</p>
            {fetchedProduct?.image && (
              <img
                src={fetchedProduct.image}
                alt="Product"
                className="mt-4 w-40 h-40 object-cover rounded-lg"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TestApp;
