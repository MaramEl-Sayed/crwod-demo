import React from 'react';

function UserProfile() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {/* Display user information and options to edit or delete account */}
      <p>Profile information will be displayed here.</p>
      <button className="bg-red-500 text-white p-2 mt-4">Delete Account</button>
    </div>
  );
}

export default UserProfile;
