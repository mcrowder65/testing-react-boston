import React from "react";

function Switch(props) {
  const [checked, setChecked] = React.useState(false);
  const getChecked = () => {
    return props.checked !== undefined ? props.checked : checked;
  };
  const toggle = () => {
    if (props.toggle !== undefined) {
      props.toggle();
    } else {
      setChecked(prevChecked => !prevChecked);
    }
  };
  return (
    <div className="container">
      <label className="switch">
        <input
          aria-label="checkbox"
          type="checkbox"
          checked={getChecked()}
          onClick={toggle}
        />
        <span className="slider" />
      </label>
    </div>
  );
}

export default Switch;
