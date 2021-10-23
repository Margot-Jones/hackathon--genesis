import { Grid, IconButton } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import s from './Header.module.css'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/img/logo.png'
import Navbar from '../NavBar/Navbar.js';
import {useAuth0} from "@auth0/auth0-react";


const useStyles = makeStyles({
  root: {
    background: '#2E0000',
    borderBottom: '2px solid #410000',
    width: '100%',
    height: '60px',
    boxShadow: '0',
    display: 'flex',
    flexDirection: 'row',
  },

  logo: {
    width: '40px',
    height: '40px',

  },

  logoDiv: {
    marginLeft: '5%',
  },

});

const Header = () => {
  const classes = useStyles();
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  return (
    <Grid className={classes.root} position="static">

      <IconButton className={classes.logoDiv}>
        <img src={logo} className={classes.logo} alt="logo" />
      </IconButton>

      <Grid className={s.navbar} md={9} sm={8} xs={7}>
        <Navbar />
      </Grid>

      <Grid className={s.loginBlock} md={1} sm={2} xs={2}>
          <button
            onClick={isAuthenticated ? logout : loginWithRedirect}
            className={isAuthenticated ? s.buttonLogOut : s.buttonLogIn}
          >
              <b>{isAuthenticated ? 'Log out' : 'Log in'}</b>
          </button>
      </Grid>

    </Grid>
  );
}

export default Header;
