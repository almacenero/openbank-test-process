import React from "react";
const ButtonsContext = React.createContext();

class ButtonsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenCancelButton: true,
    };
  }

  handleHiddenCancelButton = () => {
    const hiddenCancelButton = this.state.hiddenCancelButton;
    this.setState({ hiddenCancelButton: !hiddenCancelButton });
  };
  render() {
    return (
      <ButtonsContext.Provider
        value={{
          hiddenCancelButton: this.state.hiddenCancelButton,
          handleHiddenCancelButton: this.handleHiddenCancelButton,
        }}
      >
        <div>{this.props.children}</div>
      </ButtonsContext.Provider>
    );
  }
}

export { ButtonsProvider, ButtonsContext };
