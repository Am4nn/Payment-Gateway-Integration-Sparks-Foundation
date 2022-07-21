import React from 'react'
import classes from './Btn.module.css'

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Btn = () => {
    return (
        <Button href='https://rzp.io/l/jLX2AJC'
            variant="contained"
            endIcon={<SendIcon style={{ fontSize: '3.2rem', marginLeft: '0.9rem' }} />}
            className={classes['btn-btn']}
        >
            Donate
        </Button>
    )
}

export default Btn;