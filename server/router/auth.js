const jwt = require('jsonwebtoken');
const express = require('express');
const cookieParser = require('cookie-parser')
const Router = express.Router();
Router.use(cookieParser())
const bcrypt = require('bcryptjs');
//require('../db/conn')
const User = require('../model/modelUsershema')
Router.get('/', (req, res) => {
    res.send("<h1>hello world from router js</h1>")
})
//normal method

/*Router.post('/register', (req, res) => {
    const { name, email, work, password, phone, cpassword } = req.body;
    if (!name || !email || !work || !password || !phone || !cpassword) {
       return res.status(422).json({error:"plj filed the fields"})
    }
    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
             return res.status(422).json({email:"Email is already Exists"})
            }
            const user = new User({ name, email, phone, work, password, cpassword })
            user.save().then(() => {
                res.status(201).json({message:"user Register Successfully"})
            }).catch((err)=>res.status(500).json({error:"Failed to Regiset"}))
        }).catch((err) => { console.log(err) })
})*/
//process 2 you just choose 1 process of 3 processes
//async await method
//Register Route
/*Router.post('/register', async(req, res) => {
    const { name, email, work, password, phone, cpassword } = req.body;
    if (!name || !email || !work || !password || !phone || !cpassword) {
       return res.status(422).json({error:"plj filed the fields"})
    }
    try {
      const userExist=await User.findOne({ email: email })
      
         if (userExist) {
             return res.status(422).json({email:"Email is already Exists"})
            }
            const user = new User({ name, email, phone, work, password, cpassword })
        await user.save();
                res.status(201).json({message:"user Register Successfully"})
           
    } catch (err) {
        console.log(err);
        
   }
})*/
//All are same
//Process 3 pasword match
Router.post('/register', async(req, res) => {
    const { name, email, work, password, phone, cpassword } = req.body;
    if (!name || !email || !work || !password || !phone || !cpassword) {
          console.log("Error plg fill the files")
        return res.status(422).json({ error: "plj filed the fields" })
      
    }
    try {
      const userExist=await User.findOne({ email: email })
      
         if (userExist) {
             return res.status(423).json({email:"Email is already Exists"},)
         } else if (password != cpassword) {
               return res.status(424).json({email:"password is not match"})
         } else {
              const user = new User({ name, email, phone, work, password, cpassword })
        await user.save();
                res.status(201).json({message:"user Register Successfully"})
            }
           
           
    } catch (err) {
        console.log(err);
        
   }
})
//Sign IN Async
//vinod sign in
/*Router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({error:"plese fill the fields"})
        }
        const userLogin = await User.findOne({ email: email })
         const userpass = await User.findOne({ password: password })
     //jodi user db ar email and password same na hoy tahole execute this lines
          if (!userLogin || !userpass) {
           res.status(400).json({error:"Sign In Failed"})
          } else {
                 res.json({ message: "user Signin Successfully" });
           }
     

    } catch (err) {
        console.log(err);
        
    }
})*/
//process 2 verify password
//sign in user both are same only you use one process
Router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: "plese fill the fields" })
        }
        const userLogin = await User.findOne({ email: email })
        
     
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            //jwt token auth
            const token = await userLogin.generateAuthToken()
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly:true
            })
          
            if (!isMatch) {
                res.status(423).json({ error: "InValid Passwords" })
          
            } else {
                res.json({ message: "user Signin Successfully" });
            }
        } else {
            res.status(424).json({ error: "InValid Email! Plese Enter Correct Email" })
        }

        
    } catch (err) {
        console.log(err)
    }
    
    });
module.exports = Router;