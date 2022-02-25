import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed';
import Widgets from './Widgets';
import TweetDetail from'./TweetDetail';
import FirstPage from './FirstPage';
import { Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  
  const logout=async()=>{
    await signOut(auth);
    setTimeout(() => {
      document.querySelector(".loginPagePerm").style.display="block";
      document.querySelector(".isAccessedPerm").style.display="none"; 
      document.querySelector(".profile_detailArea").style.display="none";  
    }, 800);
    
  }
  const updateClose=()=>{
    document.querySelector(".profile_detailArea").style.display="none";
  }
  return (
    <div className="app">
      {/*Sidebar*/}
      <div className='loginPagePerm'>
        <div className='loginPage'>
          <FirstPage/>
        </div>
      </div>
      <div className='isAccessedPerm'>
        <div className='isAccessed'>
          <div className='TweetDetailConApp'>
            <TweetDetail/>
          </div>
          <Sidebar/>
          {/*Feed*/}
          <Feed/>
          {/*Widgets*/}
          <Widgets/>
        </div>
      </div>
      <div className='profile_detailArea'>
        <div className='profile_detailCon'>
          <div className='profile_detail'>
            <CloseIcon className='profile_updateClose' onClick={updateClose}/>
            <div className='profile_avatar'>
              <Avatar id="profile_avatarID" sx={{ width: 100, height: 100 }}/>
            </div>
            <div className='update_inputs'>
              <div className='profile_displayNameUpdate'>
                <TextField id="outlined-basic" label="Name Surname" variant="outlined" defaultValue="Taner Engin" fullWidth/>
              </div>
              <div className='profile_avatarUpdate'>
                <TextField id="outlined-basic" label="Avatar(url)" variant="outlined" fullWidth/>
              </div>
              <Button className='update_profile' fullWidth >Update Profile</Button>
              <div className='profile_logOut' onClick={logout}>Log out</div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
