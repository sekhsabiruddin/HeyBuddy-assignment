import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import TwitterLogo from "../../Assest/twitterlogo.png";
function Login() {
  return (
    <div className="login-outer">
      <div className="login-inner">
        <img src={TwitterLogo} alt="" />
        <h1>Log in to Twitter</h1>
        <form>
          <input type="text" placeholder="Phone number, email, address" />
          <input type="password" placeholder="Password" />
          <input type="submit" value="Log in" />
        </form>
        <div className="linked">
          <p>Forget password ?</p>
          <Link to="/sing-up">
            <p>Signup up to Twitter</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
