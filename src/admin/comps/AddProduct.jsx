
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [category, setCategory] = useState("mens");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      
      // Append data to FormData object
      Object.keys(data).forEach((key) => {
       
          formData.append(key, data[key]);
        
      });
  
      formData.append("id", 41); // Example ID
      
      // Post to the selected category endpoint
      await axios.post('http://localhost:8080/admin/add-product', formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      reset();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  

  return (
    <div className="flex justify-start">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="flex justify-start">
          <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Add Product</h2>

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
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="mens">Men's Clothing</option>
                    <option value="womens">Women's Clothing</option>
                    <option value="kids">Kids Wear</option>
                    {/* <option value='electronic'></option> */}
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
                  <label className="block text-sm font-medium mb-2">Sizes (optinal)</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("sizes", { required: false })}
                    placeholder="Enter sizes (comma-separated)"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm font-medium mb-2">Colors </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    {...register("colors", { required: true })}
                    placeholder="Enter colors (comma-separated)"
                  />
                </div>
              </div>

              {/* <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Upload Image</label>
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg p-2" 
                //   {...register("imageFile")}
                //   accept="image/*" 
                 />
              </div> */}

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
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
