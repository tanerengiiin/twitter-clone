import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import db from './firebase'
import {collection , getDocs} from 'firebase/firestore'
    


function Feed() {
    const [posts, setPost] = useState([]);
    const postsCollectionRef=collection(db,"posts")
    useEffect(()=>{
        const getPosts =async ()=>{
            const data =await getDocs(postsCollectionRef);
            setPost(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        };
        getPosts();
    },[]);
    return (
        <div className='feed'>
            
            <div className='feed__header'>
                <h1>Home</h1>
                <AutoAwesomeOutlinedIcon className='home__right__icon' fontSize='medium'/>
            </div>
            <TweetBox/>
            {    
                posts.map(e => <Post image={e.image} displayName={e.displayName} username={e.username} text={e.text} avatar={e.avatar} likes={e.likes} postCreated={e.postCreated} verified={e.verified}/>)
            }
            
            
            

        </div>
    )
}

export default Feed
