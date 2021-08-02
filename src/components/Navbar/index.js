import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    height: 80,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    fontSize: 15,
  },
  button: { color: "white" },
}));

const NavBar = (props) => {
  const { history, isLoggedIn, handleLogOut } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    handleLogOut();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      {isLoggedIn && (
        <AppBar position="static" className={classes.navBar}>
          <Toolbar>
            <div style={{ flexGrow: 1, flexDirection: "row", display: "flex" }}>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                className={classes.button}
                style={{ height: 30, marginTop: 10, fontSize: 20 }}
                onClick={() => handleMenuClick(isLoggedIn ? "/overview" : "/")}
              >
                Overview
              </Button>
              {isLoggedIn && (
                <div>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    style={{ height: 30, marginTop: 10, fontSize: 20 }}
                    onClick={() => handleMenuClick("/assets")}
                  >
                    Assets
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    style={{ height: 30, marginTop: 10, fontSize: 20 }}
                    onClick={() => handleMenuClick("/developers")}
                  >
                    Developers
                  </Button>
                  <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.button}
                    style={{ height: 30, marginTop: 10, fontSize: 20 }}
                    onClick={() => handleMenuClick("/licenses")}
                  >
                    Licenses
                  </Button>
                </div>
              )}
            </div>
            {isLoggedIn && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleSignOut()}
                  >
                    Sign Out
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default withRouter(NavBar);
