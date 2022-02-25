import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Button from '@mui/material/Button';
function Sidebar() {
    const profileUpdateOpen=()=>{
        document.querySelector(".profile_detailArea").style.display="block";
        console.log("çalş");
    }
   
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar_twitter_icon'/>
            <SidebarOption active Icon={HomeRoundedIcon} text="Home"/>
            <SidebarOption Icon={TagIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications"/>
            <SidebarOption Icon={EmailOutlinedIcon} text="Messages"/>
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
            <SidebarOption Icon={FeaturedPlayListOutlinedIcon} text="Lists"/>
            <div onClick={profileUpdateOpen}>
                <SidebarOption Icon={PermIdentityRoundedIcon} text="Profile"/>
            </div>
            <SidebarOption Icon={MoreHorizRoundedIcon} text="More"/>
            <Button className="sidebar__tweet" variant="outlined" fullWidth >Tweet</Button>
        </div>
    )
}

export default Sidebar
