import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const loginUser = async (e) => {
 
    e.preventDefault();
   
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        
        email,
     
        password
       
      })
      
    })
    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("Invalid SignIn")
      console.log("Invalid SignIn")
    } else {
       window.alert("Successfully SignIn")
      console.log("Successfully SignIn")
      navigate("/")
    }
  }
  return (
    <div>

       <form method="POST" action="/">
        <h2>Login Now</h2>
      
        Email:<input type="email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)}  autoComplete="off" required/><br/><br/>
       
       
        Password:<input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  autoComplete="off" required/><br/><br/>
        
        <input type="submit" name="signin" value="Login" onClick={loginUser}/>
     </form>
    </div>
  )
}

export default Login