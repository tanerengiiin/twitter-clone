import React from 'react'
import './TweetDetail.css'
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Comment from './Comment'

function TweetDetail() {
    const closeDetail=()=>{
        document.querySelector(".detail_image").style.height="";
        document.querySelector(".detail_image").style.width="";
        document.querySelector(".TweetDetailCon").style.display="none";
        document.querySelector(".numberOfLikes").innerHTML="";
    }
    return (
        <div className='TweetDetailCon'>
            <div className='TweetDetail'>
                        <div className='leftDetail'>
                            <div className='closeDetailCon' onClick={closeDetail}>
                                <CloseIcon className='closeDetail'/>
                            </div>
                            <div className='photoDetail'>
                                <img class="detail_image" src="" alt=''/>
                            </div>
                        </div>
                        
                        <div className='rightDetail'>
                            <div className='detailHeader'>
                                <Avatar id="detail_avatar" sx={{ width: 56, height: 56 }}/>
                                <div className='detailContainer'>
                                    <div id="detail_displayName" className='detailUser'></div>
                                    <div id="detail_username" className='detailUserNick'></div>
                                </div>
                            </div>
                            <div id="detail_text" className='detailText'>
                            
                            </div>
                            <div className='detailPostDate'></div>
                            <div className='detailLine'></div>
                            <div className='detailLikeArea'>
                                <FavoriteBorderIcon className='detailLikeHeart'/>
                                <div className='numberOfLikes'></div>
                            </div>
                            <div className='detailLine'></div>
                            <div className='detailComment'>
                                <div>
                                    <input type="text" className='commentYourself' placeholder='type a comment' />
                                </div>
                                <div>
                                    <Button className="detail__replyButton" variant="outlined" >Reply</Button>
                                </div>
                               
                            </div>
                            <div className='detailLine'></div>
                            <div className='detailComments'>
                            <Comment comment="Yorum yapma özelliği çok yakında !" username="tanerengin"/>
                            
                                
                                
                            </div>
                        </div>
                    </div>
            </div>
        
    )
}

export default TweetDetail
