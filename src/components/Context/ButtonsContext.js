import React from "react";
const ButtonsContext = React.createContext();

class ButtonsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenCancelButton: true,
      hiddenSaveButton: true,
    };
  }

  handleHiddenCancelButton = () => {
    const hiddenCancelButton = this.state.hiddenCancelButton;
    this.setState({ hiddenCancelButton: !hiddenCancelButton });
  };
  handleResetCancelButton = () => {
    this.setState({ hiddenCancelButton: true });
  };
  handleHiddenSaveButton = () => {
    const hiddenSaveButton = this.state.hiddenSaveButton;
    this.setState({ hiddenSaveButton: !hiddenSaveButton });
  };
  handlePasswordHiddenSaveButton = (bool) => {
    let hiddenSaveButton = bool;
    this.setState({ hiddenSaveButton: hiddenSaveButton });
  };
  render() {
    return (
      <ButtonsContext.Provider
        value={{
          hiddenCancelButton: this.state.hiddenCancelButton,
          handleHiddenCancelButton: this.handleHiddenCancelButton,
          hiddenSaveButton: this.state.hiddenSaveButton,
          handleHiddenSaveButton: this.handleHiddenSaveButton,
          handlePasswordHiddenSaveButton: this.handlePasswordHiddenSaveButton,
          handleResetCancelButton: this.handleResetCancelButton,
        }}
      >
        <div>{this.props.children}</div>
      </ButtonsContext.Provider>
    );
  }
}

export { ButtonsProvider, ButtonsContext };
