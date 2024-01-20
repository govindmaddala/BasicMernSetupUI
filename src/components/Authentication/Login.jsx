import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const verifyUser = () => {
    localStorage.setItem("username", "govind");
    navigate("/dashboard");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50vh",
      }}
    >
      <button onClick={verifyUser}>Login</button>
    </div>
  );
};

export default Login;
