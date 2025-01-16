import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const { register, handleSubmit, setValue, reset } = useForm();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories for dropdown
  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  // Fetch product details by ID
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/products/${id}`);
      const product = response.data;

      // Populate form with product details
      Object.keys(product).forEach((key) => {
        setValue(key, product[key]);
      });

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProduct();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      // Append data to FormData object
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      // Update product details via API
      await axios.put(`http://localhost:4000/products/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      alert("Product updated successfully!");
      reset();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  if (loading) {
    return <div className="text-center mt-10">Loading product details...</div>;
  }

  return (
    <div className="flex justify-start">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="flex justify-start">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Update Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Product Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  {...register("name", { required: true })}
                  placeholder="Enter product name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-2"
                  {...register("description", { required: true })}
                  placeholder="Enter product description"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Price</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  {...register("price", { required: true })}
                  placeholder="Enter price"
                />
              </div>

              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("category", { required: true })}
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4 w-1/2">
                  <label className="block text-sm font-medium mb-2">Brand</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("brand", { required: true })}
                    placeholder="Enter brand name"
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <input
                    type="number"
                    step="0.1"
                    max="5"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("rating", { required: true })}
                    placeholder="Enter rating"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2">Total Ratings</label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("totalRatings", { required: true })}
                    placeholder="Enter total ratings"
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2">Sizes (optional)</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("sizes")}
                    placeholder="Enter sizes (comma-separated)"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2">Colors</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("colors", { required: true })}
                    placeholder="Enter colors (comma-separated)"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="reset"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={() => reset()}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="primary-button"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
