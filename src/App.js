import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import authService from "./services/AuthServices";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import NewManagerPage from "./components/nguoichothue/newmanager/NewManagerPage"
import "bootstrap/dist/css/bootstrap.min.css";
import NewDetail from "./components/nguoichothue/newmanager/NewDetail";
import 'bootstrap/dist/css/bootstrap.min.css';
import NewDetailForAll from "./components/common/new/NewDetailForAll";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    authService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

        </div>

        {currentUser ? (
          <div className="navbar-nav m-auto">
            <li className="nav-item">
              <a href="/home" className="nav-link" >
                Tìm nhà cho thuê
              </a>
            </li>
            <li className="nav-item">
              <a href="/home" className="nav-link" >
                Tìm người ở ghép
              </a>
            </li>
            <li className="nav-item">
              <a href="/anything" className="nav-link" >
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a href="/manage-new" className="nav-link">
                Quản lý
              </a>
            </li>
            <li className="nav-item ms-auto">
              <a href="/lougout" className="nav-link" onClick={logOut}>
                Đăng xuất
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Đăng nhập
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Đăng ký
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/manage-new" element={ <NewManagerPage />} />
          <Route path="/manage-new/create" element={ <NewDetail />} /> 
          <Route path="/new-view/detail" element={ <NewDetailForAll />} />
          <Route path="/anything" element={ <NewDetailForAll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;