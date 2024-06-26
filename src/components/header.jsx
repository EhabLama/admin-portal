import React from "react";
import PropTypes from "prop-types";
import { Auth } from "aws-amplify";
import { useContext } from "react";
import authContext from "../context/authContext";
import { Redirect } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const { setAuthenticated } = useContext(authContext);
  const { onDrawerToggle } = props;

  async function authSignOut() {
    await Auth.signOut();
    setAuthenticated(false);
  }

  const signOut = (e) => {
    e.preventDefault();
    authSignOut();
    <Redirect to="/login" />;
  };

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: "none", xs: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item></Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }} onClick={signOut}>
                <LogoutIcon></LogoutIcon>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography
                color="inherit"
                variant="h5"
                component="h1"
              ></Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                {props.username}
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label={props.label1} />
          <Tab label={props.label2} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
