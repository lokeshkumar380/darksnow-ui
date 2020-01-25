import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HeartIcon from "@material-ui/icons/FavoriteBorderOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import LoginScreen from "../UserValidation/LoginScreen.js";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const useStyles = theme => ({
  menuButton: {
    marginRight: 20,
    marginLeft: -12
  },
  topbar: {
    background: "#30d0dd"
  },
  toolbarButtons: {
    marginLeft: "auto",
    marginRight: -12
  }
});

class Headingbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginbutton: false
    };

    this.onLoginClicked = this.onLoginClicked.bind(this);
  }
  onLoginClicked() {
    var loginbutton = true;

    this.setState({
      loginbutton: loginbutton
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.topbar}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Typography>Dark Snow</Typography>
          </Button>
          <span className={classes.toolbarButtons}>
            <Button color="inherit" onClick={this.onLoginClicked}>
              Login
            </Button>
            {this.state.loginbutton ? <LoginScreen /> : null}
            <Button color="inherit">
              <Typography>Contact Us</Typography>
            </Button>
            <Button color="inherit">
              <HeartIcon />
            </Button>
            <Button color="inherit">
              <NotificationsIcon />
            </Button>
            <Button color="inherit">
              <ShoppingCartIcon />
            </Button>
          </span>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(useStyles)(Headingbar);
