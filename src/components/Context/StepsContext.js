import React from "react";
const StepsContext = React.createContext();

class StepsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  handleCurrent = (actualStep) => {
    this.setState({ current: actualStep });
  };
  render() {
    return (
      <StepsContext.Provider
        value={{
          current: this.state.current,
          handleCurrent: this.handleCurrent,
        }}
      >
        <div>{this.props.children}</div>
      </StepsContext.Provider>
    );
  }
}

export { StepsProvider, StepsContext };
