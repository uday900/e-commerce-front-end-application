import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmationModal from '../comps/ConfirmationModal';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, fetchCategories } from '../../slices/CategorySlice';

export default function ManageCategories() {
  // const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);
  const [editName, setEditName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);

  const { data: categories, isLoading } = useSelector((state) => state.categories)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  


  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;

    dispatch(addCategory(newCategory))
    setNewCategory("")

  };

  const handleDeleteCategory = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/categories/${id}`);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleEditCategory = (category) => {
    setEditCategory(category.id);
    setEditName(category.name);
  };

  const handleUpdateCategory = async () => {
    if (!editName.trim()) return;

    try {
      const response = await axios.put(`http://localhost:4000/categories/${editCategory}`, {
        name: editName,
      });
      setCategories(
        categories.map((category) =>
          category.id === editCategory ? response.data : category
        )
      );
      setEditCategory(null);
      setEditName('');
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  function onConfirm(isConfirmed) {
    if (isConfirmed) {
      handleDeleteCategory(categoryIdToDelete);
    }
    setIsModalOpen(false);
  }

  return (
    <>
    <div className="p-6 max-w-3xl ">
      <h2 className="text-2xl font-semibold mb-4">Manage Categories</h2>

      {/* Add Category */}
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded px-4 py-2 w-full"
          placeholder="Add new category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button
          onClick={handleAddCategory}
          className="secondary-button"
        >
          Add
        </button>
      </div>

      {/* List Categories */}
      <ul className="divide-y divide-gray-200">
        {categories.map((category) => (
            
          <li key={category.id} className="flex py-2">
            {editCategory === category.id ? (
              <div className="flex items-center gap-4 w-full">
                <input
                  type="text"
                  className="border border-gray-300 rounded px-4 py-2 flex-1"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleUpdateCategory}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditCategory(null)}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <span className="flex-1">{category.name}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditCategory(category)}
                    className=""
                  >
                     <i class="fa-solid fa-pencil"></i>
                  </button>
                  <button
                    // onClick={() => handleDeleteCategory(category.id)}
                    onClick={()=>{
                      setCategoryIdToDelete(category.id);setIsModalOpen(true)}}
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Confirmation Modal */}
    { isModalOpen && <ConfirmationModal setIsModalOpen={setIsModalOpen} onConfirm={onConfirm} message = {"are you sure do you want to delete this category"} />}   
    </>
  );
}
