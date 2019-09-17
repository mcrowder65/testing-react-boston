import React from "react";
import "./switch.css";

class Switch extends React.Component {
  state = {
    checked: false
  };

  toggle = () => {
    if (this.props.toggle !== undefined) {
      this.props.toggle();
    } else {
      this.setState(state => ({ checked: !state.checked }));
    }
  };

  getChecked = () => {
    return this.props.checked !== undefined
      ? this.props.checked
      : this.state.checked;
  };
  render() {
    return (
      <div className="container">
        <label className="switch">
          <input
            type="checkbox"
            checked={this.getChecked()}
            onClick={this.toggle}
          />
          <span className="slider" />
        </label>
      </div>
    );
  }
}

export default Switch;
