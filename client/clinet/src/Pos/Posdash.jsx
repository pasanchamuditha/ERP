import React, { useEffect, useState } from 'react';

function Posdash() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('products')) || {}
  );
  const [paymentSuccess, setPaymentSuccess] = useState(false); // State for payment success notification

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartItems));
  }, [cartItems]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/allAvalable-Items');
      const data = await response.json();
      console.log('Fetched data:', data);
      setProducts(data); // Assuming data is an array of products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (id) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [id]: (prevCartItems[id] || 0) + 1,
    }));
  };

  const subFromCart = (id) => {
    if (cartItems[id] > 0) {
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        [id]: prevCartItems[id] - 1,
      }));
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [id]: 0,
    }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        const itemInfo = products.find(product => product.PRODUCT_CODE === key);
        console.log('Item info:', itemInfo);
        if (itemInfo) {
          totalAmount += parseFloat(itemInfo.SELLING_PRICE) * cartItems[key];
        }
      }
    }
    console.log('Total amount:', totalAmount);
    return totalAmount;
  };

  const handlePayment = async () => {
    try {
      // Prompt for customer ID
      const customerId = prompt('Enter Customer ID');

      // Prepare data for sending to the backend
      const cartData = [];
      for (const key in cartItems) {
        if (cartItems[key] > 0) {
          for (let i = 0; i < cartItems[key]; i++) {
            cartData.push({
              CUS_ID: customerId,
              PRODUCT_CODE: key,
            });
          }
        }
      }

      // Send data to the backend
      const response = await fetch('http://localhost:3001/storeBillData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartData),
      });

      // Handle response from the backend
      const data = await response.json();
      console.log('Response from backend:', data);
      setPaymentSuccess(true); // Set payment success state
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  return (
    <div className='cart-items flex flex-wrap justify-center gap-20 pr-96 p-10'>
      {/* Products */}
      {products.map((product) => (
        <div key={product.PRODUCT_CODE} className='relative'>
          <img className='w-40 h-40' alt={product.PRODUCT_NAME} src={product.PRODUCT_IMAGE} />
          <div>
            <p>{product.PRODUCT_NAME}</p>
            <p>${product.SELLING_PRICE}</p>
            <button
              onClick={() => addToCart(product.PRODUCT_CODE)}
              className='border-2 drop-shadow-2xl p-2 rounded hover:bg-green-300'
            >
              Add to Cart
            </button>
            {cartItems[product.PRODUCT_CODE] > 0 && (
              <div className='bg-orange-500 text-white font-bold p-4 drop-shadow-2xl rounded-full flex items-center justify-center h-5 w-5 absolute top-10 right-32'>
                {cartItems[product.PRODUCT_CODE]}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Cart */}
      <div className={'fixed p-4 right-0 top-0 bg-blue-100 w-80 h-screen overflow-y-scroll'}>
        <h1 className='text-white font-bold text-2xl'>Your Cart</h1>
        <p className='text-3xl font-bold'>Total: ${getTotalAmount()}</p>
        {products.map((product) => {
          if (cartItems[product.PRODUCT_CODE] !== 0) {
            return (
              <div key={product.PRODUCT_CODE} className=''>
                <div className='product-container flex justify-between items-center'>
                  <div className='flex items-center'>
                    <img className='w-20 h-20 my-4 mb-0' alt={product.PRODUCT_NAME} src={product.PRODUCT_IMAGE} />
                    X <p className='text-2xl font-bold pl-2'>{cartItems[product.PRODUCT_CODE]}</p>
                  </div>
                  <div className='flex flex-col gap-2 font-bold'>
                    <button
                      onClick={() => removeFromCart(product.PRODUCT_CODE)}
                      className='text-red-500 bg-red-200 hover:bg-red-500 hover:text-white p-2 rounded'
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => addToCart(product.PRODUCT_CODE)}
                      className='text-green-500 hover:bg-green-500 hover:text-green-700 p-2 rounded'
                    >
                      +
                    </button>
                    <button
                      onClick={() => subFromCart(product.PRODUCT_CODE)}
                      className=' text-red-500 hover:bg-red-500 hover:text-red-700 p-2 rounded'
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className='product-details flex items-center space-x-4 italic'>
                  <p>{product.PRODUCT_NAME}</p>
                  <p>-</p>
                  <p>${product.SELLING_PRICE}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
        <button
          onClick={handlePayment}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded'
        >
          Pay
        </button>
        {/* Notification for payment success */}
        {paymentSuccess && (
          <div className="bg-green-200 text-green-800 p-3 mt-3 rounded">
            Payment successfully completed!
          </div>
        )}
      </div>
    </div>
  );
}

export default Posdash;




