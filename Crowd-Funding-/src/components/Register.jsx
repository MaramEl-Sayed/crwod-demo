import React, { useState } from 'react';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">First Name:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Last Name:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Mobile:</label>
          <input 
            type="text" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
      </form>
    </div>
  );
}

export default Register;
