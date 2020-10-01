import React from "react";

interface IContextProps {
  checked: boolean;
  handleChecked: Function;
}

const CheckBoxContext = React.createContext({} as IContextProps);

class CheckBoxProvider extends React.Component<IContextProps> {
  state = {
    checked: false,
  };

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
