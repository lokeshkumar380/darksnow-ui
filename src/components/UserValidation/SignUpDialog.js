import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Form, Label } from "reactstrap";
import LoginDialog from "./LoginDialog";
import { FormGroup, Input } from "@material-ui/core";

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const customContentStyle = {
    width: "80%",
    maxHeight: 435
  };
  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Sign Up
      </Button>
      <Dialog
        contentStyle={customContentStyle}
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <Form style={{ textAlign: "center" }}>
            <h2>Sign Up</h2>
            <br />
            <FormGroup>
              <Input type="text" placeholder="Designer Id" />
            </FormGroup>
            <br />
            <FormGroup>
              <Input type="text" placeholder="First Name" />
            </FormGroup>
            <br />
            <FormGroup>
              <Input type="text" placeholder="Last Name" />
            </FormGroup>
            <br />
            <FormGroup>
              <Input type="number" placeholder="Mobile No" />
            </FormGroup>
            <br />
            <FormGroup>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <br />
            <br />
            <button
              style={{
                fontSize: "16px",
                backgroundColor: "yellowgreen",
                width: "100%",
                height: "42px"
              }}
              class="login-submit"
              type="submit"
            >
              Sign Up
            </button>
          </Form>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
