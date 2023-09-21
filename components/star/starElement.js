import { Typography } from '@mui/material';
import React from 'react';

const StarElement = ({ title }) => {
    return (
        <div className='flex flex-row gap-5 mr-[60px] justify-center items-center'>
            <img src='/img/component/star.png' style={{widht: '40px', height: '40px'}} />
            <Typography variant='h3'>{ title }</Typography>
        </div>
    )
}

export default StarElement