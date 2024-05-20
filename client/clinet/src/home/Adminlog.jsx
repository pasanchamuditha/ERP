import React, { useState } from 'react';
import Navbarhome from './Navbarhome';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const Adminlog = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/adminlogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to dashboard
        window.location.href = 'http://localhost:5173/dashboard';
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navbarhome />
      <div className="flex justify-center mt-10">Admin login</div>
      <div>
        <form className="flex max-w-md flex-col gap-4 mt-10 ml-20" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Admin name" />
            </div>
            <TextInput id="email1" type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Adminlog;
