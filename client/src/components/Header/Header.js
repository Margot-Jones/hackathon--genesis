import { Grid, IconButton } from '@material-ui/core';
import React from 'react';
import s from './Header.module.css'
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/img/logo.png'
import Navbar from '../NavBar/Navbar.js';

const useStyles = makeStyles({
  root: {
    background: '#1C0D1C',
    borderBottom: '2px solid #721D42',
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

  return (
    <Grid className={classes.root} position="static">

      <IconButton className={classes.logoDiv}>
        <img src={logo} className={classes.logo} alt="logo" />
      </IconButton>

      <Grid className={s.navbar} md={9} sm={8} xs={7}>
        <Navbar />
      </Grid>
{/*
      <Grid className={s.loginBlock} md={1} sm={2} xs={2}>
        {props.isAuth ?
        <button onClick={props.logout} className={s.buttonLogOut}><b>Log out</b></button>
        :
        <NavLink to={'/login'} className={s.buttonLogIn}>
          <Redirect to={"/login"} /><b>Log in</b>
        </NavLink>}
      </Grid> */}

    </Grid>
  );
}

export default Header;
