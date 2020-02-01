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
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoginDialog from "../UserValidation/LoginDialog";
import SignUpDialog from "../UserValidation/SignUpDialog";
import { Grid } from "@material-ui/core";

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
      loginbutton: false,
      logobutton: false
    };

    this.onLoginClicked = this.onLoginClicked.bind(this);
    this.onLogoClicked = this.onLogoClicked.bind(this);
  }
  onLoginClicked() {
    var loginbutton = true;

    this.setState({
      loginbutton: loginbutton
    });
  }
  onLogoClicked() {
    var logobutton = true;

    this.setState({
      logobutton: logobutton
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
          <Button color="inherit" onClick={this.onLogoClicked}>
            Dark Snow
          </Button>
          <Grid item>
            <LoginDialog />
          </Grid>
          <SignUpDialog />

          <span className={classes.toolbarButtons}>
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
