import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./assets/css/Register.css"
import Navbar from "./Navbar";
import Footer1 from "./Footer1"
import { Footer } from "./footer"
const Register = () => {
  const [confirmPassword, setConfirmPassword] = useState({ value: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    password: "",
  });
  const [err, setErr] = useState({});
  const [warnMsg, setWarnMsg] = useState("");
  const navigate = useNavigate();
  ///function to add data in database and create new user
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      form.name == "" ||
      form.email == "" ||
      form.phone == "" ||
      form.state == "" ||
      form.district == "" ||
      form.address == "" ||
      form.pincode == "" ||
      form.password == "" ||
      confirmPassword == ""
    ) {
      setWarnMsg("All fields are mendatory. fill all the fields.");
    } else {
      fetch("http://localhost:3000/user/registration", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((data) => {
          data.ok ? navigate("/") : navigate("/register");
        })
        .catch((err) => {
          console.log("err occur", err);
        });
    }
  };
  // this object for district of diffrent state. they will show in district input on selection of diffent state
  const districtList = {
    punjab: ["", "chandigarh", "mohali", "ludhiana", "amritsar"],
    gujrat: ["", "ahmedabad", "surat", "vadodara", "daman", "deu"],
    rajasthan: ["", "jaipur", "udaipur", "jaisalmer", "sikar", "jodhpur"],
    andhra_pradesh: [
      "",
      "something",
      "anything",
      "nothing",
      "everything",
      "nomention",
    ],
    maharastra: ["", "mimbai", "pune", "nasik", "kondhana", "jalgaon"],
  };

  //object of function for validate user input that the given input is in right format or not
  const validateInput = {
    phone: (key, value) => {
      if (/[a-z && A_Z]/.test(value) || value.length !== 10) {
        setErr((err) => {
          return {
            ...err,
            [key]: "Invalid number.",
          };
        });
      }
    },
    pincode: (key, value) => {
      if (/[a-z && A_Z]/.test(value)) {
        setErr((err) => {
          return {
            ...err,
            [key]: "Pincode can't contain alphabets.",
          };
        });
      }
    },
    password: (key, value) => {
      if (value.length < 6) {
        setErr((err) => {
          return {
            ...err,
            [key]: "Length of password should be greater than 6",
          };
        });
      }
    },
    email: (key, value) => {
      if (value.indexOf("@") === -1) {
        setErr((err) => {
          return {
            ...err,
            [key]: "Email should contain @ in it.",
          };
        });
      }
    },
    confirmPassword: (key, value) => {
      if (value != form.password) {
        setErr((err) => {
          return {
            ...err,
            [key]: "Password are not match.please check your password.",
          };
        });
      }
    },
  };
  return (
    <div className="maindiv">
      <Navbar />
      <div id="div-1">
        <div id="laundryservice">Laundry Service</div>
        <div id="line-1">Doorstep Wash & Dryclean Service</div>
        <div id="line-2">Already Have Account</div>
        <Link to="/">
          <button id="sidebutton">Signin</button>
        </Link>
      </div>
      <div id="div-2">
        <div className="warning-message">{warnMsg}</div>
        <div className="register">Register</div>
        <div className="name">
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="line1"></div>
        <div className="email">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onBlur={() => {
              validateInput.email && validateInput.email("email", form.email);
            }}
          />
          {err.email && <div className="error-message">{err.email}</div>}
        </div>
        <div className="line2"></div>
        <div className="phone">
          <input
            name="phone"
            type="text"
            placeholder="Phone"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            onBlur={() => {
              validateInput.phone && validateInput.phone("phone", form.phone);
            }}
          />
          {err.phone && <div className="error-message">{err.phone}</div>}
        </div>
        <div className="line3"></div>
        <div className="state">
         <label className="label">State</label>
          <select
            name="state"
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          >
            <option value=""></option>
            <option value="punjab">Punjab</option>
            <option value="gujrat">Gujrat</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="andhra_pradesh">Andhra Pradesh</option>
            <option value="maharastra">Maharastra</option>
          </select>
        </div>
        <div className="line4"></div>
        <div className="district">
          <label className="label2">District</label>
          <select
            name="district"
            placeholder="District"
            onChange={(e) => setForm({ ...form, district: e.target.value })}
          >
            {form.state &&
              districtList[form.state].map((district) => {
                return (
                  <>
                    <option value={district}>{district.toUpperCase()}</option>
                  </>
                );
              })}
          </select>
        </div>
        <div className="line5"></div>
        <div className="registeraddress">
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </div>
        <div className="line6"></div>
        <div className="pincode">
          <input
            name="pincode"
            type="text"
            placeholder="Pincode"
            onChange={(e) => setForm({ ...form, pincode: e.target.value })}
            onBlur={() => {
              validateInput.pincode &&
                validateInput.pincode("pincode", form.pincode);
            }}
          />
          {err.pincode && <div className="error-message">{err.pincode}</div>}
        </div>
        <div className="line7"></div>
        <div className="password">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            onBlur={() => {
              validateInput.password &&
                validateInput.password("password", form.password);
            }}
          />
          {err.password && <div className="error-message">{err.password}</div>}
        </div>
        <div className="line8"></div>
        <div className="confirmpassword">
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              setConfirmPassword({ ...confirmPassword, value: e.target.value })
            }
            onBlur={() => {
              validateInput.confirmPassword &&
                validateInput.confirmPassword(
                  "confirmPassword",
                  confirmPassword.value
                );
            }}
          />
          {err.confirmPassword && (
            <div className="error-message">{err.confirmPassword}</div>
          )}
        </div>
        <div className="line9"></div>
        <div className="box"></div>
        <div className="TC">I agree to Terms & Condition receiving marketing and promotional materials</div>
        <div>
          <button className="buttonregister" onClick={handleRegister}>Register</button>
        </div>
      </div>
      <div className="endline">
      </div>
     <div className="Footer-section">
      <div>
      <Footer1/>
      </div>
     <div>
     <Footer/>
     </div>
     
     </div>
    </div>
  );
};

export default Register;
