import React, { useState } from 'react'
import './FirstPage.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {auth} from './firebase'

function FirstPage() {
    console.log(auth.currentUser);
    const[registerEmail,setRegisterEmail]=useState();
    const[registerPass,setRegisterPass]=useState();
    const[loginEmail,setLoginEmail]=useState();
    const[loginPass,setLoginPass]=useState();
    const[newDisplayName,setDisplayName]=useState();
    const[username,setUsername]=useState();
    const[newPhotoUrl,setPhotoUrl]=useState();
    const[user,setUser]=useState();
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
    })
    const register=async()=>{
        try{
            const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPass);
            document.querySelector(".sign_error").innerHTML="succesfull";
        }catch(error){
            document.querySelector(".sign_error").innerHTML=error.message;
        }
    }
   
    const login=async()=>{
        try{
            const user=await signInWithEmailAndPassword(auth,loginEmail,loginPass);
            document.querySelector(".login_error").innerHTML="succesfull";
            document.querySelector(".isAccessedPerm").style.display="block";
            document.querySelector(".loginPagePerm").style.display="none";
        }catch(error){
            document.querySelector(".login_error").innerHTML=error.message;
        }
    }
    const signPage=()=>{
        document.querySelector(".signArea").style.display="block";
    }
    const closeSign=()=>{
        document.querySelector(".signArea").style.display="none";
    }
    return (
        <form>
        <div className='firstPage'>
            <div className='fp_left'>
                <div className='fp_leftImg'>
                    <img src='https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png' alt='yok'/>
                </div>
                <TwitterIcon className='left_tweetIcon'/>
            </div>
            <div className='fp_right'>
                <TwitterIcon className='right_tweetIcon' fontSize='large'/>
                <div className='fp_header1'>Happening Now</div>
                <div className='fp_header2'>Join Twitter Today.</div>
                <div className='login_container'>
                    <div className='login_email'>
                        <TextField id="demo-helper-text-misaligned-no-helper" label="E-mail" fullWidth onChange={(event)=>setLoginEmail(event.target.value)} />                        
                    </div>
                    <div className='login_pass'>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth onChange={(event)=>setLoginPass(event.target.value)}/>                    
                    </div>
                    <div className='login_button'>
                        <Button className='login_buttonButton' fullWidth onClick={login}>Log in</Button>
                        <Button className='signup_buttonButton' variant="outlined" fullWidth onClick={signPage}>Sign up</Button>
                    </div>
                    <div className='login_error'>
                        
                    </div>
                </div>
            </div>
            <div className='signArea'>
                <div className='signCon'>
                    <div className='signArea_close' onClick={closeSign}><CloseIcon/></div>
                    <div id="sign-text">Sign Up Twitter</div>
                    <div className='sign_bottomCon'>
                        <div id="sign_displayName">
                            <TextField  id="user_displayName outlined-basic" label="Name Surname" fullWidth variant="outlined" onChange={(event)=>setDisplayName(event.target.value)}/>
                        </div>
                        <div id="sign_username">
                            <TextField   id="user_username outlined-basic" label="Username" fullWidth variant="outlined" onChange={(event)=>setUsername(event.target.value)}/>
                        </div>
                        <div id="sign_email">
                            <TextField   id="user_email demo-helper-text-misaligned-no-helper" fullWidth label="E-mail" onChange={(event)=>setRegisterEmail(event.target.value)}/> 
                        </div>
                        <div id="sign_pass">
                            <TextField  id="user_pass outlined-password-input" fullWidth label="Password" type="password" autoComplete="current-password" onChange={(event)=>setRegisterPass(event.target.value)}/>
                        </div>
                        <div id='sign_photoUrl'>
                            <TextField  id="user_profileUrl outlined-password-input" fullWidth label="Photo Url" type="text" onChange={(event)=>setPhotoUrl(event.target.value)}/>
                        </div>
                        <Button className='login_buttonButton' fullWidth onClick={register}>Sign up</Button>
                        <div className='sign_error'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default FirstPage
