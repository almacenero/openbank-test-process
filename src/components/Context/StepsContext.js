import React from "react";
const StepsContext = React.createContext();

class StepsProvider extends React.Component {
  state = {
    current: 0,
    status: "process",
  };

  handleCurrent = (actualStep) => {
    if (actualStep !== this.state.current)
      this.setState({ current: actualStep });
  };
  handleStatus = (actualSatus) => {
    if (actualSatus !== this.state.status)
      this.setState({ status: actualSatus });
  };
  render() {
    return (
      <StepsContext.Provider
        value={{
          current: this.state.current,
          handleCurrent: this.handleCurrent,
          status: this.state.status,
          handleStatus: this.handleStatus,
        }}
      >
        <div>{this.props.children}</div>
      </StepsContext.Provider>
    );
  }
}

export { StepsProvider, StepsContext };
