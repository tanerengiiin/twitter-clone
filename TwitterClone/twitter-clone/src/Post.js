import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Post({displayName,username,verified,text,image,avatar,likes, postCreated}) {

    const postExpand=()=>{
        document.querySelector(".post__headerExpandIcon").addEventListener("click",()=>{
            document.querySelector(".post__headerExpandBox").classList.toggle("post_expandOpen");
        })
    }

    const myArray=postCreated.split(" ");
    const postMonth=myArray[1]+" "+myArray[2];
    const postDate=myArray[4].substring(0,5)+" · "+myArray[1]+" "+myArray[2]+", "+myArray[3];
    function getTweetDetail(){
        const img = new Image();
        img.onload = function() {
            if(this.width>this.height){
                document.querySelector(".detail_image").style.maxWidth=100+"%";
            }else if(this.width<this.height){
                document.querySelector(".detail_image").style.maxHeight=100+"vh";
            }
        }
        img.src = image;
        document.querySelector(".detail_image").setAttribute("src",image);
        document.querySelector("#detail_avatar").setAttribute("src",avatar);
        document.querySelector("#detail_text").innerHTML=text;
        document.querySelector("#detail_username").innerHTML="@"+username;
        document.querySelector("#detail_displayName").innerHTML=displayName;
        document.querySelector(".TweetDetailCon").style.display="block"; 
        document.querySelector(".detailPostDate").innerHTML=postDate; 
        if(likes!=0){
            document.querySelector(".numberOfLikes").innerHTML=likes;
        }
        
    }
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar className='post__mainAvatar' srcSet={avatar} sx={{ width: 56, height: 56 }}/>
            </div>
            <div className='post__body'>
                <div className='post__header'>
                    <div className='post__headerText'>
                        <div className='post__headerUsername'>
                            <h3 className='post__nameSurname'>
                                {displayName}
                            </h3>
                            { verified && <VerifiedRoundedIcon className='post__badge'/>}
                            <h4 className='post__username'>@{username}</h4>
                            <div className='post__timeDot'></div>
                            <div className='post__time'>
                                <h4>{postMonth}</h4>
                                <div className='post__timeExpand' >
                                    {postDate}
                                </div>
                            </div>
                        </div>
                        <div onClick={postExpand}>
                            <MoreHorizOutlinedIcon fontSize='medium' className='post__headerExpandIcon'/>
                        </div>

                        <div className='post__headerExpandBox'>
                            <div className='post_reportPost'>
                                <FlagOutlinedIcon className='post_reportIcon'/> 
                                <div>Report Tweet</div>
                            </div>
                            <div className='post_deletePost' >
                                <DeleteOutlineIcon className='post_reportIcon'/> 
                                <div>Delete Post</div>
                            </div>
                        </div>
                    </div>
                    <div className='post__headerDescription'>
                        <p>{text}</p>
                    </div>
                </div>
                <img className='post__image' src={image} onClick={getTweetDetail}/>
                <div className='post__footer'>
                    <div className='footer__div footer__comment'>
                       <ChatBubbleOutlineIcon className='footer__icon' fontSize='small'/>
                       <div>5</div>
                       <div className='footer__toggle'>
                        Reply
                       </div>
                    </div>

                    <div className='footer__div footer__retweet' > 
                        <RepeatIcon className='footer__icon' fontSize='small'/>
                        <div></div>
                        <div className='footer__toggle'>
                        Retweet
                       </div>
                    </div>
                   
                    <div className='footer__div footer__like'>
                        <FavoriteBorderIcon className='footer__icon' fontSize='small'/>
                        <div className='footer__postLike'>{likes!=0 && likes}</div>
                        <div className='footer__toggle'>
                        Like
                       </div>
                    </div>
                    <div className='footer__div footer__publish'>
                        <PublishIcon className='footer__icon' fontSize='small'/>
                        <div className='footer__toggle'>
                        Share
                       </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Post
