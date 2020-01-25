import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LoginScreen from "../UserValidation/LoginScreen.js";

const useStyles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(60)
  },
  title: {
    flexGrow: 1
  }
});

class Headingbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      showComponent: true
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button onClick={this.onButtonClick} color="inherit">
              Login
            </Button>
            {this.state.showComponent ? <LoginScreen /> : null}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Headingbar);
