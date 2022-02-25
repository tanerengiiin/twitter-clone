import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import './Widgets.css'

function WidgetsFollow() {
    return (
        <div className='widgetsFollow'>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI9u7ZtVcN5fThv_ZMnfIimZYThhV7q7lnw&usqp=CAU' />
            <div className='widgetsFollow__text'>
                <div className='text__up'>Taner Engin</div>
                <div className='text__down'>@tanerengin</div>
            </div>
            <Button variant="contained" className='widgetsFollow__button'>Follow</Button>
        </div>
    )
}

export default WidgetsFollow
