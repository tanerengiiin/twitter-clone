import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import WidgetsFollow from './WidgetsFollow';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__search'>
                <SearchIcon/>
                <input type="search" placeholder='Search Twitter' className='widgets__searchInput'/>
                <CloseIcon className='widgets__searchClose' fontSize='small'/>
            </div>
            <div className='widgets__follow'>
                <h3>Who to follow</h3>
                <WidgetsFollow/>
                <WidgetsFollow/>
                <WidgetsFollow/>
            </div>
        </div>
    )
}

export default Widgets
