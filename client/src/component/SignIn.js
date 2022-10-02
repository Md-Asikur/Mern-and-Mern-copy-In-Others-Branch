import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './err.css'
const SignIn = () => {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name:"",email:"",password:"",cpassword:"",work:"",phone:""
  })
  const [error, setError] = useState(false)
  
  const handleInputs = e => {
    const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
     
  }
  
  const postData = async (e) => {
   
    e.preventDefault();
    const { name, email, work, phone, password, cpassword } = user;
     if (!name || !email || !work || !phone || !password || !cpassword) {
      setError(true)
       return false
      
    }
     if (name.length <= 4) {
        <p>Your Name Must be 10 char</p>
       }
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
    } else {
       window.alert("Successfully Registretion")
      console.log("Successfully Registretion")
      navigate("/")
    }
  }
  return (
  
    <div>
      
{console.log("user",user)}
      <form method="POST">
        <h2>Register Now</h2>
        <label for="name">Name</label>
     <input type="text" name="name" value={user.name} onChange={handleInputs} autoComplete="off" />
        
        {error && !user.name &&<span className='sp'>Enter Valid Name</span>}
      <label for="name">Email</label>
      <input type="email" name="email"  value={user.email} onChange={handleInputs} autoComplete="off"/>
        {error && !user.email && <span className='sp'>Enter Valid Email</span>}
        <label for="name">Phone</label>
      <input type="number" name="phone"  value={user.phone} onChange={handleInputs} autoComplete="off"/>
 {error && !user.phone &&<span className='sp'>Enter Valid Phone</span>}
       <label for="name">Work</label>
      <input type="text" name="work" value={user.work} onChange={handleInputs} autoComplete="off" />
 {error && !user.work &&<span className='sp'>Enter Valid WorkSpace</span>}
       <label for="name">Password</label>
       <input type="password" name="password" value={user.password} onChange={handleInputs} autoComplete="off" />
 {error && !user.password &&<span className='sp'>Enter Valid Password</span>}
       <label for="name">ConfirmPassword</label>
        <input type="password" name="cpassword" value={user.cpassword} onChange={handleInputs} autoComplete="off" />
 {error && !user.cpassword &&<span className='sp'>Enter Valid confirm passwordd</span>}
       <br/><input type="submit" name="signup" value="register"
        onClick={postData}/>
     </form>
    </div>
  )
}

export default SignIn