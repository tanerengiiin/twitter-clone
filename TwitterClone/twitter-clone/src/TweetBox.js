import React from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { auth } from './firebase';
import './TweetBox.css'
function TweetBox() {
    console.log(auth.currentUser);
    const tweet=()=>{
        const date=new Date();
        console.log(date);
    }
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar className='twitter__avatar' />
                    <input id="newText" type="text" placeholder="What's happening?" />
                    
                </div>
                <input className='tweetBox__imageInput' type="text" placeholder="Enter an image url" />
                <Button className="tweetBox__button" onClick={tweet}>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
