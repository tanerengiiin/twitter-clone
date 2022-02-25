import React from 'react'
import './TweetDetail.css'

function Comment({comment,username}) {
    return (
        <div className='Comment'>
            <div className='comment__username' style={{fontSize:"18px"}}>@{username}</div>
            <div className='comment__text' style={{fontSize:"17px"}}>{comment}</div>
            <div className='comment__line'></div>
        </div>
    )
}

export default Comment
