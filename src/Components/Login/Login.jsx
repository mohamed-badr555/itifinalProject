import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({userInfo}) {

 let navigate=   useNavigate()
        const [user, setuser] = useState({
        
            email:'',
         
            password:''
        })
        const [JoiErrors, setJoiErrors] = useState(null)
const [LoginError, setLoginError] = useState('') 

        function getUser(e){
            setJoiErrors(null)
            setLoginError('')
            setuser({...user,[e.target.name]:e.target.value})
            
        }

   async function Submit(e){
        e.preventDefault();
        let schema=Joi.object({
            
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        
       
            password:Joi.string().pattern(/^(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,10}$/i).required()
        })
        let JoiResponse=schema.validate(user,{abortEarly:false})
// console.log(user);
        if(JoiResponse.error==undefined){
            try {
                const {data} =await axios.get(`http://localhost:3000/users?email=${user.email}`);
                // console.log(data);
                if(data.length == 0){

                    setLoginError('Invaild Email or Password   ')
                 
                        
                }else{
                 if(data[0].password == user.password){
                    localStorage.setItem('username',data[0].name);
                    userInfo()
                    navigate("/home")
                 }else{

                     setLoginError('Invaild Email or Password  ')
                 }
                }
                
            } catch (error) {
                setLoginError("There was an error getting the data!")
             
            }
         
          
        }else{
          
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
    <div className='my-5 p-5 m-auto w-50'>
        {LoginError.length ==0 ?"":<div className="alert alert-danger"> {LoginError} </div>}
   <form className='shadow rounded p-5' onSubmit={Submit}>
    <h2 className="mb-3 ">Login Form</h2>

  <div className="mb-3">
    <label  htmlFor='email' className="form-label">Email</label>
    <input onChange={getUser} type="email" className="form-control" name='email' id="email" />

  </div>
  {getSpecificError('email')?  <div className="alert alert-danger">{getSpecificError('email')}</div>:'' }
 
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input onChange={getUser} type="password" className="form-control"  name='password' id="password"/>
  </div>
  {getSpecificError('password')?  <div className="alert alert-danger">Password must be atleast contain one special character and one digit</div>:'' }
  <button type="submit" className="btn btn-primary">login</button>
</form>

    </div>
  )
}
