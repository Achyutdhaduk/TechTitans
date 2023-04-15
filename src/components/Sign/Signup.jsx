import React from 'react'
import './signup.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from "axios"
import ClearIcon from '@mui/icons-material/Clear';


function Signup() {
    const [Firstname,setFirstname]=useState("");
    const [Lastname,setLastname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState(0);
    const navigate = useNavigate();
    // useEffect(()=>{
    //     const auth=localStorage.getItem('user');
        // if(auth){
        //     navigate("/");
        // }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const collect= async (e)=>{
        if(Firstname && Lastname && email && password){
            axios.post("http://localhost:4000/geeksforgeeks/signin",{Firstname,Lastname,email,password})
            .then(res=>{if(res.data.message==="User Already Signup"){
                seterror(1)
            }else{
                localStorage.setItem("user",JSON.stringify(res.data.user))
                navigate('/')
            }
        })
        }else{
            seterror(2)
        }
    }
    return (
        <>
        {/* <button className='btn_back' onClick={(e)=>{navigate(-1)}}><ClearIcon sx={{ fontSize: 30 }}/></button> */}
            <div className="center">
            <ClearIcon className='cross' onClick={(e)=>{navigate(-1)}} sx={{ fontSize: 40 }}/>
                <h1>Signup</h1>
                <form>
                {error === 1 && <span className='errortext'>User already signup</span> }
                {error === 2 && <span className='errortext'>Enter All Details</span> }
                    <div className="txt_field">
                        <input onChange={(e)=>setFirstname(e.target.value)} value={Firstname} type="text" required />
                        <span></span>
                        <label>Firstname</label>
                    </div>
                    <div className="txt_field">
                        <input onChange={(e)=>setLastname(e.target.value)} value={Lastname} type="text" required />
                        <span></span>
                        <label>Lastname</label>
                    </div>
                    <div className="txt_field">
                        <input onChange={(e)=>setemail(e.target.value)} value={email} type="text" required />
                        <span></span>
                        <label>E-mail</label>
                    </div>
                    <div className="txt_field">
                        <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <input onClick={(e)=>collect()}  type="button"  className="loginbtn" value="Signup" />
                    <div className="signup_link">
                        Already Login Then Go Here! <Link to={"/login"}>Login</Link>
                    </div>
                </form>
            </div>
            
        </>
    )
}


export default Signup
