import React from "react";

interface IContextProps {
  current: number;
  status: string;
  handleCurrent: Function;
  handleStatus: Function;
}

const StepsContext = React.createContext({} as IContextProps);

class StepsProvider extends React.Component<IContextProps> {
  state = {
    current: 0,
    status: "process",
  };

  handleCurrent = (actualStep: number) => {
    if (actualStep !== this.state.current)
      this.setState({ current: actualStep });
  };
  handleStatus = (actualSatus: string) => {
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
