import { useState, useEffect } from "react";
import "./app.css";
import {useNavigate} from "react-router-dom";

function Appss() {
  const navigate=useNavigate()
  const initialValues = { name: "", email: "", password: "",cpassword:"",work:"",phone:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
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
    } else if (values.password!=values.cpassword) {
       errors.cpassword = "Password is Not Match";
  }
    return errors;
  };
  const hanc = async (e) => {
    // e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
    const { name, email, work, phone, password, cpassword } = formValues;
    
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        name,
        email,
        work,
        phone,
        password,
        cpassword 
      })
      
    })
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registretion")
      console.log("Invalid Registretion")
    } if (data.status === 423) {
      window.alert("Invalid Registretion")
      console.log("Invalid Registretion")
    } if (data.status === 424) {
      window.alert("Invalid Registretion")
      console.log("Invalid Registretion")
    }if(data.status === 201){
        window.alert("Successfully Registretion")
       console.log("Successfully Registretion")
       
    } else {
       navigate("/login")
     }
  }
  

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form onSubmit={handleSubmit}>//or click button
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
         
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
           <div className="field">
            <label>Work</label>
            <input
              type="text"
              name="work"
              placeholder="Work"
              value={formValues.work}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.work}</p>
          <div className="field">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              placeholder="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phone}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          
           <div className="field">
            <label>CPassword</label>
            <input
              type="password"
              name="cpassword"
              placeholder="cpass"
              value={formValues.cpassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.cpassword}</p>
           
          <button className="fluid ui button blue" onClick={hanc}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Appss;