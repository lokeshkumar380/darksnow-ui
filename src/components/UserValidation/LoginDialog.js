import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Form, Label } from "reactstrap";
import { FormGroup, Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
  dialogCustomizedWidth: {
    "max-width": "80%"
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      id: "",
      password: ""
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.validate = this.validate.bind(this);
  }
  handleClose() {
    var open = false;

    this.setState({
      open: open
    });
  }
  handleClickOpen() {
    var open = true;

    this.setState({
      open: open
    });
  }
  handleUserInput(e) {
    this.setState({
      id: e.target.value,
      password: e.target.value
    });
  }

  validate(event) {
    console.log("hye = " + this.state.password);
    event.preventDefault();
  }
  render() {
    const { classes } = this.props;
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
                  onChange={event => this.handleUserInput(event)}
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="password"
                  placeholder="Password"
                  // value={this.state.password}
                  onChange={event => this.handleUserInput(event)}
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
      </div>
    );
  }
}
export default withStyles(useStyles)(Login);
