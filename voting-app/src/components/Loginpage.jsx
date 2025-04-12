import React, { useState } from "react";
import "./Loginpage.css"; // Ensure this file has your styles

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    gender: "",
    dob: "",
    aadhar: "",
    voterId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/voter/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Voter Registration</h2>

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="fullname" onChange={handleChange} required />

       

        <label>Gender</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="gender" value="male" onChange={handleChange} required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
          </label>
        </div>

        <label htmlFor="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" onChange={handleChange} required />

        <label htmlFor="aadhar">Aadhar Number</label>
        <input type="text" id="aadhar" name="aadharNo" onChange={handleChange} required />

        <label htmlFor="voterId">Voter ID Number</label>
        <input type="text" id="voterId" name="voterIdNo" onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>

      <footer className="footer">
        © 2025 Voting App | All rights reserved.
      </footer>
    </div>
  );
};

export default RegisterForm;
