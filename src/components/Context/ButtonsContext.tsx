import React from "react";

interface IContextProps {
  hiddenSaveButton: boolean;
  hiddenCancelButton: boolean;
  handleHiddenCancelButton: Function;
  handleResetCancelButton: Function;
  handleEnabledCancelButton: Function;
  handleHiddenSaveButton: Function;
  handleDisableSaveButton: Function;
  handlePasswordHiddenSaveButton: Function;
}

const ButtonsContext = React.createContext({} as IContextProps);

class ButtonsProvider extends React.Component<IContextProps> {
  state = {
    hiddenCancelButton: true,
    hiddenSaveButton: true,
  };
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
  handlePasswordHiddenSaveButton = (hidden: boolean) => {
    if (hidden !== this.state.hiddenSaveButton) {
      this.setState({ hiddenSaveButton: hidden });
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
