import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register({userInfo}) {

 let navigate=   useNavigate()
        const [user, setuser] = useState({
            name:'',
            email:'',
            age:0,
            password:''
        })
        const [JoiErrors, setJoiErrors] = useState(null)
const [registerionError, setRegisterionError] = useState('') 

        function getUser(e){
            setJoiErrors(null)
            setRegisterionError('')
            setuser({...user,[e.target.name]:e.target.value})
            
        }

   async function Submit(e){
        e.preventDefault();
        let schema=Joi.object({
            name:Joi.string().pattern(/^[a-zA-Z ]+$/).min(3).required(),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            age:Joi.number().min(18).max(100).required(),
            // ^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,10}$
            password:Joi.string().pattern(/^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,10}$/i).required()
        })
        let JoiResponse=schema.validate(user,{abortEarly:false})
// console.log(user);
        if(JoiResponse.error==undefined){
            try {
                const {data} =await axios.get(`http://localhost:3000/users?email=${user.email}`);
                // console.log(data);
                if(data.length >0){
                        setRegisterionError('Email already registered.')
                }else{
                    await axios.post('http://localhost:3000/users', {
                  
                    name: user.name,
                    email: user.email,
                    age: user.age,
                    password: user.password
                });
                localStorage.setItem('username',user.name);
                userInfo()
                navigate('/home');
                }
                
            } catch (error) {
                setRegisterionError("There was an error posting the data!")
                // console.error("There was an error posting the data!", error);
            }
         
          
        }else{
            // console.log(JoiResponse.error.details);
            setJoiErrors(JoiResponse.error.details)
        }

    }
  function getSpecificError(key){
if(JoiErrors !=null){
for (let i = 0; i < JoiErrors.length; i++) {
  if(JoiErrors[i].context.key == key){
    return JoiErrors[i].message;
  }
    
}
}
return '';
  }



  return (
    <div className='my-5  p-5 m-auto w-50'>
        {registerionError.length ==0 ?"":<div className="alert alert-danger"> {registerionError} </div>}
   <form className='shadow rounded p-5' onSubmit={Submit}>
    <h2 className="mb-3">Register Form</h2>
  <div className="mb-3">
    <label  htmlFor='name' className="form-label">Name</label>
    <input onChange={getUser} type="text" className="form-control" name='name' id="text" />

  </div>
 
  {getSpecificError('name')?  <div className="alert alert-danger">Name must be character</div>:'' }
  <div className="mb-3">
    <label  htmlFor='email' className="form-label">Email</label>
    <input onChange={getUser} type="email" className="form-control" name='email' id="email" />

  </div>
  {getSpecificError('email')?  <div className="alert alert-danger">{getSpecificError('email')}</div>:'' }
  <div className="mb-3">
    <label  htmlFor='age' className="form-label">Age</label>
    <input onChange={getUser} type="number" className="form-control" name='age' id="age" />

  </div>
  {getSpecificError('age')?  <div className="alert alert-danger">{getSpecificError('age')}</div>:'' }
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input onChange={getUser} type="password" className="form-control"  name='password' id="password"/>
  </div>
  {getSpecificError('password')?  <div className="alert alert-danger">Password must be atleast contain one special character and one digit</div>:'' }
  <button type="submit" className="btn btn-primary">register</button>
</form>

    </div>
  )
}
