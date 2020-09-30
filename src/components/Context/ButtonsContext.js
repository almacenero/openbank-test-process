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
    const hidden = false;
    if (hidden !== this.state.hiddenCancelButton) {
      this.setState({ hiddenCancelButton: hidden });
    }
  };
  handleResetCancelButton = () => {
    const hidden = true;
    if (hidden !== this.state.hiddenCancelButton) {
      this.setState({ hiddenCancelButton: hidden });
    }
  };
  handleEnabledCancelButton = () => {
    const hidden = false;
    if (hidden !== this.state.hiddenCancelButton) {
      this.setState({ hiddenCancelButton: hidden });
    }
  };
  handleHiddenSaveButton = () => {
    const hiddenSaveButton = this.state.hiddenSaveButton;
    this.setState({ hiddenSaveButton: !hiddenSaveButton });
  };
  handleDisableSaveButton = () => {
    const hidden = true;
    if (hidden !== this.state.hiddenSaveButton)
      this.setState({ hiddenSaveButton: hidden });
  };
  handlePasswordHiddenSaveButton = (bool) => {
    if (bool !== this.state.hiddenSaveButton) {
      this.setState({ hiddenSaveButton: bool });
    }
  };
  render() {
    return (
      <ButtonsContext.Provider
        value={{
          hiddenCancelButton: this.state.hiddenCancelButton,
          handleHiddenCancelButton: this.handleHiddenCancelButton,
          handleEnabledCancelButton: this.handleEnabledCancelButton,
          hiddenSaveButton: this.state.hiddenSaveButton,
          handleHiddenSaveButton: this.handleHiddenSaveButton,
          handlePasswordHiddenSaveButton: this.handlePasswordHiddenSaveButton,
          handleResetCancelButton: this.handleResetCancelButton,
          handleDisableSaveButton: this.handleDisableSaveButton,
        }}
      >
        <div>{this.props.children}</div>
      </ButtonsContext.Provider>
    );
  }
}

export { ButtonsProvider, ButtonsContext };
