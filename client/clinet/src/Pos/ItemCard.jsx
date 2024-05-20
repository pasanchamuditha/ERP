/*import React from 'react'

const ItemCard = ({ product, onAddToCart }) => {
  const { PRODUCT_CODE, PRODUCT_NAME, SELLING_PRICE, PRODUCT_IMAGE } = product;

  const handleAddToCart = () => {
    onAddToCart({ PRODUCT_CODE, SELLING_PRICE });
  };


  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
    <img className="w-full" src={PRODUCT_IMAGE} alt={PRODUCT_NAME} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{PRODUCT_NAME}</div>
      <p className="text-gray-700 text-base">Price: ${SELLING_PRICE}</p>
    </div>
    <div className="px-6 py-4">
      <button onClick={handleAddToCart} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add to Cart
      </button>
    </div>
  </div>
  )
}

export default ItemCard
*/

///////////////////////////////////////////////////////////////////
import React from 'react'

const ItemCard = () => {
  return (
    <div>
      this is item card 
    </div>
  )
}

export default ItemCard
