import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/AuthServices";
import ROLE from "../../constant/ROLE";
import Button from 'react-bootstrap/Button';


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(ROLE.NGUOI_CHO_THUE)
  const [birtdDay, setBirthDay] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(e.target.value).then(
        () => {
          navigate("/home");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeRole = (e) => {
    setRole(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h3>Sign up</h3>
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

        <div className="row col-3 mb-1">
        <input
          type="date"
          placeholder="birth"
          value={birtdDay}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        
        
        <div onChange={onChangeRole} >
          <input type="radio" value={ROLE.NGUOI_CHO_THUE} name="role"/> Người cho thuê
          <input type="radio" value={ROLE.NGUOI_THUE} name="role"/> Người thuê
        </div>

        <Button variant="success">Sign up</Button>
      </form>
      
    </div>
  );
};

export default Signup;