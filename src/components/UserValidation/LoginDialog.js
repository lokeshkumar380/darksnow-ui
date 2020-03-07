import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Form, Label } from "reactstrap";
import { FormGroup, Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
// import Dashboard from "../Dashboard/dashboard";
import { HashRouter, Router, Link } from "react-router-dom";
import { fakeAuth } from "../../App";
import { Redirect } from "react-router-dom";
import DesignerService from "../service";

const useStyles = theme => ({
  dialogCustomizedWidth: {
    "max-width": "80%"
  }
});

const designerObject = {
  designer_id: String,
  password: String,
  mobile_no: 0,
  first_name: "",
  last_name: ""
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.designerService = new DesignerService();

    this.state = {
      dashboard: false,
      open: false,
      redirectToReferrer: false,
      redirect: null
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    //this.handleUserInput = this.handleUserInput.bind(this);
    this.validate = this.validate.bind(this);
  }
  handleClose() {
    var open = false;

    this.setState({
      open: open
    });
  }
  handleClickOpen() {
    console.info("handlce cliock open");
    var open = true;

    this.setState({
      open: open
    });
  }
  userId(e) {
    designerObject.designer_id = e.target.value;
  }
  password(e) {
    designerObject.password = e.target.value;
  }

  test() {
    this.setState({ redirect: "/admin" });
  }

  validate(e) {
    e.preventDefault();
    this.designerService.designer_login(designerObject).then(response => {
      if (response === "login successful") {
        console.info(response);
        this.setState({ redirect: "/admin" });
      } else this.setState({ redirect: "/" });
    });
  }
  render() {
    const { classes } = this.props;
    if (this.state.redirect) {
      console.info(this.state.redirect + "hello");
      return <Redirect to={this.state.redirect} />;
    } else {
      return (
        <div>
          <Button color="inherit" onClick={this.handleClickOpen}>
            Login
          </Button>
          <Dialog
            classes={{ paperFullWidth: classes.dialogCustomizedWidth }}
            open={this.state.open}
            onClose={this.handleClose}
          >
            <DialogContent>
              <Form style={{ textAlign: "center" }}>
                <h2>Login</h2>
                <br />
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="Designer Id"
                    // value={this.state.id}
                    onChange={event => this.userId(event)}
                  />
                </FormGroup>
                <br />
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="Password"
                    // value={this.state.password}
                    onChange={event => this.password(event)}
                  />
                </FormGroup>
                <br />
                <br />
                <button
                  style={{
                    backgroundColor: "yellowgreen",
                    width: "100%",
                    height: "42px",
                    fontSize: "16px"
                  }}
                  type="submit"
                  onClick={event => this.validate(event)}
                >
                  Log In
                </button>
              </Form>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={this.handleClose} color="inherit">
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
          {/* {this.state.dashboard ? <Dashboard /> : null} */}
        </div>
      );
    }
  }
}
export default withStyles(useStyles)(Login);
