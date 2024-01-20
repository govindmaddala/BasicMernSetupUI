import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    let username = localStorage.getItem("username");
    if (!username) {
      navigate("/login");
    }
  }, []);

  return children;
};

export default PrivateRoute;
