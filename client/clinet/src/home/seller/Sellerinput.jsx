import { useState } from 'react';
import Navbarhome from '../Navbarhome';

const Sellerinput = () => {
  const [SUPPLIER_ID, setSUPPLIER_ID] = useState('');
  const [SUPPLIER_NAME, setSUPPLIER_NAME] = useState('');
  const [PRODUCT_CODE, setPRODUCT_CODE] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      SUPPLIER_ID,
      SUPPLIER_NAME,
      PRODUCT_CODE
    };

    try {
      const response = await fetch('http://localhost:3001/suppliertableinput', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Display a popup message indicating successful upload
  alert('Item uploaded successfully!');
} catch (error) {
  console.error('There was a problem sending the data:', error);
}
  };

  return (
    <div>
      <Navbarhome />
      <div>This is the seller page</div>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="SUPPLIER_ID">Supplier ID</label>
          <input
            id="SUPPLIER_ID"
            type="text"
            value={SUPPLIER_ID}
            onChange={(e) => setSUPPLIER_ID(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="SUPPLIER_NAME">Supplier Name</label>
          <input
            id="SUPPLIER_NAME"
            type="text"
            value={SUPPLIER_NAME}
            onChange={(e) => setSUPPLIER_NAME(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="PRODUCT_CODE">Product Code</label>
          <input
            id="PRODUCT_CODE"
            type="text"
            value={PRODUCT_CODE}
            onChange={(e) => setPRODUCT_CODE(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Sellerinput;
