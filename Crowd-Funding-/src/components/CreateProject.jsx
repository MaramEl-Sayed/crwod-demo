import React, { useState } from 'react';

function CreateProject() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('');
  const [target, setTarget] = useState('');
  const [pictures, setPictures] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle project creation logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create a New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Details:</label>
          <textarea 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Category:</label>
          <input 
            type="text" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Target Amount:</label>
          <input 
            type="number" 
            value={target} 
            onChange={(e) => setTarget(e.target.value)} 
            required 
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Upload Pictures:</label>
          <input 
            type="file" 
            multiple 
            onChange={(e) => setPictures([...e.target.files])} 
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">Create Project</button>
      </form>
    </div>
  );
}

export default CreateProject;
