import React from "react";
import "./Home.css";
import twiterBackImage from "../../Assest/back-twitter.png";
import GoogleIcon from "../../Assest/google-icon.png";
import AppleIcon from "../../Assest/apple-icon.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <div>
      <div className="main-container">
        <div className="left-img-container">
          <img src={twiterBackImage} alt="twiter-image" />
        </div>
        <div className="right-container">
          <div className="right-inner-container">
            <h2>Happening Now</h2>
            <h4>Join Twiter today</h4>
            <div className="login-button-with-google">
              <img src={GoogleIcon} alt="" />
              <span>Sing up with Google</span>
            </div>
            <div className="login-button-with-apple">
              <img src={AppleIcon} alt="" />
              <span>Sing up with Apple</span>
            </div>
            <Link to="sing-up">
              <div className="create-account-button">
                <span>Create account</span>
              </div>
            </Link>
            <p>
              By signing up, you agree to the{" "}
              <span className="linked">Terms of Service</span> and
              <span className="linked">Privacy Policy,</span> including{" "}
              <span className="linked"> Cookie Use.</span>
            </p>
            <div className="have-account">
              <p>
                Already have an account?{" "}
                <span className="linked">
                  <Link to="login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
