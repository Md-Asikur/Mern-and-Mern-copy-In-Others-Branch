import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login1 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const [error, setError] = useState(false);
  const loginUser = async (e) => {
    e.preventDefault();
      setError(true);
      
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,

          password,
        
      }),
      
    });
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid SignIn");
      console.log("Invalid SignIn");
    } else if(data.status===200) {
    //   window.alert("Successfully SignIn");
      console.log("Successfully SignIn");
      navigate("/");
    }
  };
  return (
    <div>
      <form method="POST" action="/">
        <h2>Login Now</h2>
        <label> Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
        />
        {error && !email && <span className="sp">Enter Valid Email</span>}
        <label> Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off"
          required
        />
        {error && !password && <span className="sp">Enter Valid Password</span>}
        <input type="submit" name="signin" value="Login" onClick={loginUser} />
      </form>
    </div>
  );
};

export default Login1;
