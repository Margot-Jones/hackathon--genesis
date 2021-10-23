import { Toolbar} from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';


const useStyles = makeStyles({

  logo: {
    width: '50px',
    height: '50px'
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

});

const Navbar = () => {

  const classes = useStyles();

  return (
      <Toolbar className={classes.toolbar}>

        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
           <AccountCircleOutlinedIcon htmlColor="#EBEBEB" fontSize="large" />
          </NavLink>
        </div>

        <div className={s.item}>
          <NavLink to="/blog" activeClassName={s.activeLink}>
            <MailOutlineOutlinedIcon htmlColor="#EBEBEB" fontSize="large" />
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/login" activeClassName={s.activeLink}>
            <PublicIcon htmlColor="#EBEBEB" fontSize="large" />
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/comment" activeClassName={s.activeLink}>
            <PublicIcon htmlColor="#EBEBEB" fontSize="large" />
          </NavLink>
        </div>

      </Toolbar>
  );
}

export default Navbar;