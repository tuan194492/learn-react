import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/AuthServices";
import ROLE from "../../constant/ROLE";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(ROLE.NGUOI_CHO_THUE)

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
        authService.login(email, password);
        navigate("/home");
        window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };

  const onChangeRole = (e) => {
    setRole(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>
        <div className="row col-3 mb-1">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="row col-3 mb-1">
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <div className="row col-3 mb-1">
        <input
          type="text"
          placeholder="name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        
        
        <div onChange={onChangeRole} >
          <input type="radio" value={ROLE.NGUOI_CHO_THUE} name="role"/> Người cho thuê
          <input type="radio" value={ROLE.NGUOI_THUE} name="role"/> Người thuê
        </div>


        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;