import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  withStyles,
} from '@material-ui/core'

import {
  Menu,
}
  from '@material-ui/icons';

import NavButton from './NavButton';
import SubTotalBar from '../SubtotalBar/SubtotalBar';
// import './Nav.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Nav = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          {props.sideBar.open && <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>}
          <Typography onClick={() => props.history.push('/home')} className={classes.grow} variant="h4" color="inherit" >
            Marino's Deli
          </Typography>
            <NavButton color="inherit" path="/home" name={props.user.id ? 'Home' : 'Login / Register'}/>
            {/* Show the link to the info page and the logout button if the user is logged in */}
            {props.user.id && (
              <>
                {/* <NavButton color="inherit" path="/info" name="info"/> */}
              </>
            )}
                 <NavButton color="inherit" path="/menu" name="menu"/>
            {/* Always show this link since the about menu is not protected */}
            {props.user.is_admin && (
              <NavButton color="inherit" path="/admin" name="admin"/>
            )}
            {/* <NavButton path="/about" name="about"/> */}
            {props.order.orderItems.orders.length >= 1 && (<SubTotalBar />)}
        </Toolbar>
      </AppBar>
    </div>
  )
};



Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};
// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  order: state.order,
  sideBar: state.sideBar,
});

export default connect(mapStateToProps)(withStyles(styles)(withRouter(Nav)));
