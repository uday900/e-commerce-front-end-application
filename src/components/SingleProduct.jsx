import React from 'react'
import Navbar from './Navbar'
import { Link, useParams } from 'react-router-dom';
import { mens } from '../mock-data/mens';
import SampleProductsInLandingPage from './SampleProductsInLandingPage';
function SingleProduct() {

    const { id } = useParams();

    const item = mens.filter((item) => item.id === +id)[0];
    
  return (
    <>
    <Navbar/>


    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={item.image} alt="Raven Hoodie" className="w-full h-96 object-cover rounded-lg sticky top-2" /> 
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">Raven Hoodie with Black Colored Design</h1>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-yellow-500">★</span>
            <span className="text-sm text-gray-500 ml-2">(4.2)</span>
          </div>
          <p className="text-2xl font-semibold mb-4">$93.00</p>
 
          <div className="mt-6">
            <h2 className="text-sm font-semibold mb-2">Select Size</h2>
            <div className="flex space-x-2">
              <button className="border border-gray-200 rounded-md px-3 py-1">XS</button>
              <button className="border border-gray-200 rounded-md px-3 py-1">S</button>
              <button className="border border-gray-200 rounded-md px-3 py-1">M</button>
              <button className="border border-gray-200 rounded-md px-3 py-1">L</button>
              <button className="border border-gray-200 rounded-md px-3 py-1">XL</button>
            </div>
            {/* <a href="#" className="text-sm text-blue-500 hover:underline mt-2">Size Guide</a> */}
          </div>

          <div className="mt-5">
          <h2 className="text-sm font-semibold mb-2">Colour Available</h2>
          <div className="flex space-x-2 mb-4 ">
          
            <span className="inline-block w-5 h-5 rounded-full bg-black"></span>
            <span className="inline-block w-5 h-5 rounded-full bg-gray-300"></span>
            <span className="inline-block w-5 h-5 rounded-full bg-blue-500"></span>
            <span className="inline-block w-5 h-5 rounded-full bg-red-500"></span>
          </div>
          </div>


          <button 
          // className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
          className='primary-button'
          >
            Add to Cart
          </button>

          <button className='mx-3 secondary-button'>
            Buy Now
          </button>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Product Description</h2>
            <p className="text-gray-600 mb-4">
              100% Bio-washed Cotton - makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provides all-time comfort. Anytime, anywhere, infinite range of multi-match fit prints.
            </p>
            <table className="table-auto mb-4">
              <tbody>
                <tr>
                  <td className="pr-4">Fabric</td>
                  <td>Bio-washed Cotton</td>
                </tr>
                <tr>
                  <td className="pr-4">Pattern</td>
                  <td>Printed</td>
                </tr>
                <tr>
                  <td className="pr-4">Fit</td>
                  <td>Regular-Fit</td>
                </tr>
                <tr>
                  <td className="pr-4">Neck</td>
                  <td>Round Neck</td>
                </tr>
                <tr>
                  <td className="pr-4">Sleeves</td>
                  <td>Half-Sleeves</td>
                </tr>
                <tr>
                  <td className="pr-4">Wear</td>
                  <td>Casual Wear</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <SampleProductsInLandingPage  products = {mens} title = "Related Products"/>


   
    </>
  )
}

export default SingleProduct