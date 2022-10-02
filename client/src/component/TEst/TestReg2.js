import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../err.css";
const SignIn = () => {
    const navigate = useNavigate();
     const [formErrors, setFormErrors] = useState({});
     const [isSubmit, setIsSubmit] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    work: "",
    phone: "",
  });
  

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    };
     useEffect(() => {
       console.log(formErrors);
       if (Object.keys(formErrors).length === 0 && isSubmit) {
         console.log(user);
       }
     }, [formErrors]);
 const validate = (values) => {
   const errors = {};
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   if (!values.name) {
     errors.name = "Username is required!";
   }
   if (!values.phone) {
     errors.phone = "Phone is required!";
   }
   if (!values.work) {
     errors.work = "Work is required!";
   }
   if (!values.email) {
     errors.email = "Email is required!";
   } else if (!regex.test(values.email)) {
     errors.email = "This is not a valid email format!";
   }
   if (!values.password) {
     errors.password = "Password is required";
   } else if (values.password.length < 4) {
     errors.password = "Password must be more than 4 characters";
   } else if (values.password.length > 10) {
     errors.password = "Password cannot exceed more than 10 characters";
   }
   if (!values.cpassword) {
     errors.cpassword = "Conpassword is required";
   } else if (values.password != values.cpassword) {
     errors.cpassword = "Password is Not Match";
   }
   return errors;
 };
  const postData = async (e) => {
      e.preventDefault();
       setFormErrors(validate(user));
       setIsSubmit(true);
    const { name, email, work, phone, password, cpassword } = user;
    if (!name || !email || !work || !phone || !password || !cpassword) {
     
      return false;
    }
   
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        work,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registretion");
      console.log("Invalid Registretion");
    } else {
      window.alert("Successfully Registretion");
      console.log("Successfully Registretion");
      navigate("/");
    }
  };
  return (
    <div>
      {console.log("user", user)}
      <form method="POST">
        <h2>Register Now</h2>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputs}
          autoComplete="off"
        />
        <p style={{ display: "block" }}>{formErrors.name}</p>

        <label for="name">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputs}
          autoComplete="off"
        />
        <p style={{ display: "block" }}>{formErrors.email}</p>

        <label for="name">Phone</label>
        <input
          type="number"
          name="phone"
          value={user.phone}
          onChange={handleInputs}
          autoComplete="off"
        />
        <p>{formErrors.phone}</p>
        <label for="name">Work</label>
        <input
          type="text"
          name="work"
          value={user.work}
          onChange={handleInputs}
          autoComplete="off"
        />
        <p>{formErrors.work}</p>
        <label for="name">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputs}
          autoComplete="off"
        />
        <p>{formErrors.password}</p>
        <label for="name">ConfirmPassword</label>
        <input
          type="password"
          name="cpassword"
          value={user.cpassword}
          onChange={handleInputs}
          autoComplete="off"
        />
        <p>{formErrors.cpassword}</p>
        <br />
        <input type="submit" name="signup" value="register" onClick={postData} />
      </form>
    </div>
  );
};

export default SignIn;
