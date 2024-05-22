import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [form, setForm] = useState("");
  return (
    <div>
      <div className="div-1">
        <div className="laundryservice">Laundry Service</div>
        <div className="line-1">Doorstep Wash & Dryclean Service</div>
        <div className="line-2">Don’t Have An Account?</div>
        <Link to="/signin"><button className="sidebutton">Signin</button></Link>
      </div>
      <div className="div-2">
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            name="phone"
            type="number"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label>State</label>
          <select
            name="state"
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          >
            <option value="andhrapradesh">Andhra Pradesh</option>
            <option value="assam">Assam</option>
            <option value="kerala">Kerala</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="telangana">Telangana</option>
          </select>
        </div>
        <div>
          <label>District</label>
          <select
            name="district"
            onChange={(e) => setForm({ ...form, district: e.target.value })}
          >
            <option value="westgodavari">West godavari</option>
            <option value="eastgodavari">East godavari</option>
            <option value="krishna">Krishna</option>
          </select>
        </div>
        <div>
          <label>Address</label>
          <input
            name="address"
            type="text"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </div>
        <div>
          <label>Pincode</label>
          <input
            name="pincode"
            type="number"
            onChange={(e) => setForm({ ...form, pincode: e.target.value })}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="text"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            name="confirmpassword"
            type="text"
            onChange={(e) =>
              setForm({ ...form, confirmpassword: e.target.value })
            }
          />
        </div>
        <div>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
};
export default Register;
