import React from 'react'
import './SideBar.css'

const SideBar = () => {
    return (
        <ul id="social-sidebar">
            <li>
                <a href='https://twitter.com/tsfsingapore' className="entypo-twitter"><span>Tweeter</span></a>
            </li>
            <li>
                <a href='https://www.facebook.com/thesparksfoundation.info' className="entypo-facebook"><span>Facebook</span></a>
            </li>
            <li>
                <a href='https://www.linkedin.com/company/the-sparks-foundation/?originalSubdomain=in' className="entypo-linkedin"><span>Linkedin</span></a>
            </li>
            <li>
                <a href='https://www.instagram.com/thesparksfoundation.info/' className="entypo-camera"><span>Instagram</span></a>
            </li>
        </ul>
    )
}

export default SideBar;