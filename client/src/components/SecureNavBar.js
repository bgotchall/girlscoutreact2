// src/components/NavBar.js

import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link, useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import AuthLink from '../utils/AuthLink';


const SecureNavBar = () => {
    const { user, loading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const location = useLocation();
    const [showAvatar, setShowAvatar] = useState(false);
    const [avatarName, setAvatarName] = useState();
    const [avatarPic, setAvatarPic] = useState();

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     if (!user) {
    //         setShowAvatar(true);
    //         setAvatarName(user.name);
    //         setAvatarPic(user.picture);
    //     }
    // });

    if (loading || !user) {
        return <div>Loading...</div>;
      }
    return (
        <>

            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                     </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">


                        <AuthLink name="Calendar" route="/calendar" ></AuthLink>
                        <AuthLink name="Signups" route="/signup" ></AuthLink>
                        <AuthLink name="News" route="/news" ></AuthLink>
                        <AuthLink name="Profile" route="/profile" ></AuthLink>
                        <AuthLink name="Carousel Test" route="/carousel" ></AuthLink>

                        {/* {isAuthenticated && <PrivateRoute path="/profile" component={Profile} />} */}
                        
                        {isAuthenticated && (
                            <NavDropdown title="Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/membersManage">Manage Members</NavDropdown.Item>
                                <NavDropdown.Item href="/signups">Manage Signups</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/carousel">Carousel</NavDropdown.Item>
                            </NavDropdown>
                            
                        )}
                        
                    </Nav>

                    <Avatar alt={user.name} src={user.picture} />
                    {!isAuthenticated && <Button variant="contained" color="primary" onClick={() => loginWithRedirect({})}>Log in</Button>}

                    {isAuthenticated && <Button variant="contained" color="primary" onClick={() => logout()}>Log out</Button>}

                    
                    

                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
};

export default SecureNavBar;





