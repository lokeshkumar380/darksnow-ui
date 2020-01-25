import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
    console.log("inside handle change of checkbox");
  };

  return (
    <div>
      <Checkbox
        value="uncontrolled"
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
        onChange={handleChange}
      />
    </div>
  );
}
