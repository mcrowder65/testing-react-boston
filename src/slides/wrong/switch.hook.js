import React from "react";

function SwitchHook(props) {
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
        <input type="checkbox" checked={getChecked()} onClick={toggle} />
        <span className="slider" />
      </label>
    </div>
  );
}

export default SwitchHook;
