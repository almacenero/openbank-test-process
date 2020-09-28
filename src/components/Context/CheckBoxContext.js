import React from "react";
const CheckBoxContext = React.createContext();

class CheckBoxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleChecked = () => {
    const checked = this.state.checked;
    this.setState({ checked: !checked });
  };
  render() {
    return (
      <CheckBoxContext.Provider
        value={{
          checked: this.state.checked,
          handleChecked: this.handleChecked,
        }}
      >
        <div>{this.props.children}</div>
      </CheckBoxContext.Provider>
    );
  }
}

export { CheckBoxProvider, CheckBoxContext };
