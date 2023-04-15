import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios"
import "./signup.css"
import ClearIcon from '@mui/icons-material/Clear';


function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    const [error, seterror] = useState(0);
    // useEffect(()=>{
    //     const auth=localStorage.getItem('user');
    //     if(auth){
    //         navigate("/");
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])
        
    const collect = async (e) => {
        if( email && password){
            axios.post("http://localhost:4000/geeksforgeeks/login",{email,password})
            .then(res=>{
                if(res.data.message === "Invalid Password"){
                    seterror(1)
                }else if(res.data.message === "Invalid Email"){
                    seterror(2)
                }else if(res.data.message === "Successfully Login"){
                    localStorage.setItem("user",JSON.stringify(res.data.user))
                    alert(res.data.message)
                    navigate("/")
                }
            })
        }else{
            seterror(3);
        }
        
    }
  return (
    <>
        {/* <button className='btn_back' onClick={(e)=>{navigate(-1)}}><ClearIcon sx={{ fontSize: 30 }}/></button> */}
        <div className="center">
        <ClearIcon className='cross' onClick={(e)=>{navigate(-1)}} sx={{ fontSize: 40 }}/>
                <h1>Login</h1>
                <form>
                    {error === 2 && <span className='errortext'>Invalid Email,refresh and Try Again</span> }
                    {error === 3 && <span className='errortext'>Enter All Details</span> }
                    <div className="txt_field">
                        <input onChange={(e) => setemail(e.target.value)} value={email} type="text" required />
                        <span></span>
                        <label>E-mail</label>
                    </div>
                    {error === 1 && <span className='errortext'>Invalid Password,refresh and Try Again</span>}  
                    <div className="txt_field">
                        <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <input onClick={(e) => collect()} className="loginbtn" type="button" value="Login" />
                    <div className="signup_link">
                        Not a member? <Link to={"/signup"}>Signup</Link>
                    </div>
                </form>
            </div>
    </>
  )
}

export default Login
