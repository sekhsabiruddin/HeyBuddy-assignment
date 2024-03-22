import { useState } from "react";
import React from "react";
import "./Singup.css";
import { Link } from "react-router-dom";
import TwitterLogo from "../../Assest/twitterlogo.png";
const Singup = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  return (
    <div className="singup-outer">
      <div className="singup-inner">
        <div className="img-box">
          <img src={TwitterLogo} alt="" />
        </div>
        <h1>Create an account</h1>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="password" placeholder="Passwpord" />
          <p className="use-email">Use email</p>
          <div>
            <p className="dob">Date of Birth</p>
            <p className="dob-text">
              Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh
              sit. Quis bibendum ante phasellus metus, magna lacinia sed augue.
              Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper
              blandit viverra dignissim eget tellus. Nibh mi massa in molestie a
              sit. Elit congue.
            </p>
          </div>
          <div className="date-month-year">
            <select id="date" value={selectedDate} onChange={handleDateChange}>
              <option value="">Date</option>
              {Array.from({ length: 31 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <select
              id="month"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              <option value="">Month</option>
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {new Date(0, index).toLocaleString("en", { month: "long" })}
                </option>
              ))}
            </select>
            <select id="year" value={selectedYear} onChange={handleYearChange}>
              <option value="">Year</option>
              {Array.from({ length: 151 }, (_, index) => (
                <option key={1900 + index} value={1900 + index}>
                  {1900 + index}
                </option>
              ))}
            </select>
          </div>

          <input type="submit" value="Next" />
          <div className="have-account">
            <p>
              Already have an account?{" "}
              <span className="">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;
