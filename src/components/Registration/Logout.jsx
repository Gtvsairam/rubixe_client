import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.clear();
    
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;