import React, { useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useLoaderData } from 'react-router-dom';

const EditAdmin = () => {
  const { USER_ID, PASSWORD_ID } = useLoaderData();

  const [userId, setUserId] = useState(USER_ID);
  const [passwordId, setPasswordId] = useState(PASSWORD_ID);

  const handleAdminSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const userIdValue = form.userId.value;
    const passwordIdValue = form.passwordId.value;

    const adminObj = { USER_ID: userIdValue, PASSWORD_ID: passwordIdValue };

    // Send admin details to the database
    fetch(`/dashboard/Admin-manage/${USER_ID}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(adminObj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        // Handle successful response
        alert('Admin details updated successfully!');
        form.reset();
      })
      .catch((error) => {
        // Handle fetch errors
        console.error('Error during fetch:', error);
        alert('An error occurred while updating admin details. Please try again.');
      });
  };


  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Admin</h2>
      <form onSubmit={handleAdminSubmit} className="flex flex-col gap-4">
        {/* User ID */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="userId" value="User ID" />
          </div>
          <TextInput id="userId" name="userId" type="text" defaultValue={userId} required />
        </div>
        {/* Password ID */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="passwordId" value="Password ID" />
          </div>
          <TextInput
            id="passwordId"
            name="passwordId"
            type="password"
            defaultValue={passwordId}
            required
          />
        </div>
        <Button type="submit" className="mt-5">
          Update Admin
        </Button>
      </form>
    </div>
  );
};

export default EditAdmin;
