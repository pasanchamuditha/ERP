import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

const AdminCreateUpload = () => {
  const [USER_ID, setUserId] = useState('');
  const [PASSWORD_ID, setPasswordId] = useState('');

  const handleItemSubmit = (event) => {
    event.preventDefault(); // Move event.preventDefault() here

    // Prepare data to send
    const dataToSend = {
      USER_ID,
      PASSWORD_ID,
    };

    // Example fetch request, replace with your actual endpoint
    fetch('http://localhost:3001/dashboard/Adminupload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('Data uploaded successfully!!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while uploading data.');
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'USER_ID') {
      setUserId(value);
    } else if (name === 'PASSWORD_ID') {
      setPasswordId(value);
    }
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload An Item</h2>
      <form onSubmit={handleItemSubmit} className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
            <Label htmlFor='USER_ID' value='User ID' />
          </div>
          <TextInput
            id='USER_ID'
            name='USER_ID'
            type='text'
            placeholder='Enter User ID'
            value={USER_ID}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
            <Label htmlFor='PASSWORD_ID' value='Password ID' />
          </div>
          <TextInput
            id='PASSWORD_ID'
            name='PASSWORD_ID'
            type='password'
            placeholder='Enter Password ID'
            value={PASSWORD_ID}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type='submit' className='mt-5'>
          Upload Item
        </Button>
      </form>
    </div>
  );
};

export default AdminCreateUpload;
