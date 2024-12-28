import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/admin/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    number: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setAdmin({ ...admin, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, number, work, password, cpassword } = admin;

    const resp = await fetch("http://localhost:5000/admin-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        number: number,
        work: work,
        password: password,
        cpassword: cpassword,
      }),
    });

    const data = await resp.json();

    console.log(data);

    if (resp.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate("/admin-login");
    }
  };

  return (
    <div className="admin-signup">
      <h1 className="text-center mt-4 admin-login-title">
        Create your new account
      </h1>
      <h5 className="admin-login-subtitle">
        Welcome! Please enter your details.
      </h5>
      <div className="admin-signup-from">
        <form method="POST">
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="form-group">
              <label htmlFor="exampleInputName">
                Your Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="form-control-input"
                id="adminExampleInputName"
                value={admin.name}
                onChange={handleInputs}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPhone">Phone No. <span className="required">*</span></label>
              <input
                type="number"
                name="number"
                className="form-control-input"
                id="adminExampleInputPhone"
                value={admin.number}
                onChange={handleInputs}
                placeholder="phone"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              className="form-control-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={admin.email}
              onChange={handleInputs}
              placeholder="Enter email"
              required
            />
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword">Password <span className="required">*</span></label>
              <input
                type="password"
                className="form-control-input"
                name="password"
                id="exampleInputPassword"
                value={admin.password}
                onChange={handleInputs}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputCPassword">Confirm Password <span className="required">*</span></label>
              <input
                type="password"
                name="cpassword"
                className="form-control-input"
                id="exampleInputCPassword"
                value={admin.cpassword}
                onChange={handleInputs}
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={postData}
              type="submit"
              className="btn btn-primary m-4 admin-login-button"
            >
              Register
            </button>

            <h5 className="admin-login-subtitle mt-5">
              Already have an account? 
              <span style={{marginLeft: "1%"}}>
                <Link className="signup-link" to={"/admin-login"}>
                  Sign in
                </Link>
              </span>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
