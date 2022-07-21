import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import "./style.css"

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LaptopIcon from '@mui/icons-material/Laptop';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const NavBar = () => {
    const [expand, setExpand] = useState(false);

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className='navbar navfontfamily bg-dark'
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <span className='nav_ac navbar-brand' to="/">
                        Sparks Foundation
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        setExpand(expand ? false : "expanded");
                    }}
                >
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                href='https://internship.thesparksfoundation.info/'
                                target="_blank"
                                className='myNavLink'
                            >
                                <HomeIcon style={{ marginRight: '0.5rem' }} />
                                Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href='https://www.thesparksfoundationsingapore.org/'
                                target="_blank"
                                className='myNavLink'
                            >
                                <LaptopIcon style={{ marginRight: '0.5rem' }} />
                                AboutUs
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href='https://thesparksfoundation.info/'
                                target="_blank"
                                className='myNavLink'
                            >
                                <InfoIcon style={{ marginRight: '0.5rem' }} />
                                Info
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link
                                href='https://rzp.io/l/jLX2AJC'
                                target="_blank"
                                className='myNavLink'
                            >
                                <CurrencyRupeeIcon style={{ marginRight: '0.5rem' }} />
                                Donate
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;
