import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
  const verifyUser = () => {
    localStorage.clear()
    navigate("/login");
  };
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={verifyUser}>Logout</button>
    </div>
  )
}

export default Dashboard
