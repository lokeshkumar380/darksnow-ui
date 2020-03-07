import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

export default function Checkboxes(props) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
    console.log("inside handle change of checkbox");
    console.info(event.target.checked);
    return event.target.checked;
  };

  return (
    <div>
      <Checkbox
        value="uncontrolled"
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
        //onChange={handleChange}
        onChange={event => props.onSelectImage(event, props.value)}
      />
    </div>
  );
}
