
import { debugging } from '../globals.js';
import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import AuthLink from "../utils/AuthLink";
import { makeStyles } from "@material-ui/core/styles";
import SimpleBackdrop from './SimpleBackdrop.js';


const NavBar = () => {
  const {
    user,
    loading,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();
  const isAuthenticated2 = isAuthenticated || debugging;

  const location = useLocation();
  const [showAvatar, setShowAvatar] = useState(false);
  const [avatarName, setAvatarName] = useState();
  const [avatarPic, setAvatarPic] = useState();

  const useStyles = makeStyles(theme => ({
    root: {
      //backgroundColor: "#00ae58" //#00ae58 is the GS green color
    },
    link: {
      color: 'black',
    },
    avatar: {
      marginRight: '5px',
    }
  }));

  const classes = useStyles();

  if (loading) {
    return <SimpleBackdrop />;
  }

  return (
    <>
      <Navbar className={classes.root} expand="lg">
        {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
        <Link to="/" className={classes.link} > Home</Link>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" mr-auto">

            <AuthLink name="Calendar" route="/calendar"></AuthLink>
            <AuthLink name="Signups" route="/signup"></AuthLink>
            <AuthLink name="Photos" route="/photos"></AuthLink>
            <AuthLink name="Update news" route="/newspage"></AuthLink>
            <AuthLink name="Update banner" route="/bannerpage"></AuthLink>
            <AuthLink name="Profile" route="/profile"></AuthLink>

            {/* {isAuthenticated && <PrivateRoute path="/profile" component={Profile} />} */}

            {isAuthenticated2 && (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item>
                <AuthLink name="Manage members" route="/membersManage"></AuthLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                <AuthLink name="Manage Signups" route="/signupManage"></AuthLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <AuthLink name="Update news" route="/newspage"></AuthLink>
                </NavDropdown.Item>
                <NavDropdown.Item >
                  <AuthLink name="Update banner" route="/bannerpage"></AuthLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/carousel">
                  Something else
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>

          {!isAuthenticated2 && (
            <Button
              className={classes.avatar}
              variant="contained"
              color="primary"
              onClick={() => loginWithRedirect({})}
            >
              Log in
            </Button>
          )}

          {isAuthenticated2 && !debugging && (
            <Avatar className={classes.avatar} alt={user.name} src={user.picture} />
          )}

          {isAuthenticated2 && (
            <>
              <Button
                className={classes.avatar}
                variant="contained"
                color="primary"
                onClick={() => logout()}
              >
                Log out
            </Button>
            </>
          )}

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

/////
