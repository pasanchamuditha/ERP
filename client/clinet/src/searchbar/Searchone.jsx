import React, { useState } from 'react';

function Searchone() {
  const [productCode, setProductCode] = useState('');
  const [itemData, setItemData] = useState(null);

  async function searchItem() {
    const response = await fetch(`http://localhost:3001/Item/${productCode}`);
    if (response.ok) {
      const data = await response.json();
      setItemData(data);
    } else {
      alert('Item not found');
      setItemData(null);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center">
  <h1 className="text-2xl font-bold mb-4">Search Items by PRODUCT_CODE</h1>
</div>
<div className="flex items-center justify-center mb-4">
  <input
    type="text"
    value={productCode}
    onChange={(e) => setProductCode(e.target.value)}
    placeholder="Enter PRODUCT_CODE"
    className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
  />
  <button onClick={searchItem} className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Search</button>
</div>
      <table border="1">
        <thead className="bg-green-100">
          <tr>
          <th className="px-4 py-2">PRODUCT_CODE</th>
    <th className="px-4 py-2">Name</th>
    <th className="px-4 py-2">PRODUCT_CATEGORY</th>
    <th className="px-4 py-2">PRODUCT_EXP_DATE</th>
    <th className="px-4 py-2">QUANTITY</th>
    <th className="px-4 py-2">SELLING_PRICE</th>
          </tr>
        </thead>
        <tbody className="bg-green-100">
          {itemData && (
            <tr className="px-4 py-2">
              <td className="px-4 py-2">{itemData.PRODUCT_CODE}</td>
              <td className="px-4 py-2">{itemData.PRODUCT_NAME}</td>
              <td className="px-4 py-2">{itemData.PRODUCT_CATEGORY}</td>
              <td className="px-4 py-2">{itemData.PRODUCT_EXP_DATE}</td>
              <td className="px-4 py-2">{itemData.QUANTITY}</td>
              <td className="px-4 py-2">{itemData.SELLING_PRICE}</td>
              
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Searchone;



