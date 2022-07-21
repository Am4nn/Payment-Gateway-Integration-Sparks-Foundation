import React from 'react'
import classes from './style.module.css';

const Footer = () => {
    return (
        <footer className={"bg-dark py-3 mt-auto " + classes.footer}>
            <span className="text-muted">Copyright &copy; 2022 AMAN ARYA</span>
            <div className="text-muted">Sparks Foundation All Rights Reserved</div>
        </footer>
    )
}

export default Footer;