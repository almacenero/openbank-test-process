import React from "react";
interface IContextProps {
  password: string;
  repassword: string;
  optionalQuestion: string;
  handlePassword: Function;
  handleRePassword: Function;
  handleOptionalQuestion: Function;
}

const PasswordContext = React.createContext({} as IContextProps);

class PasswordProvider extends React.Component<IContextProps> {
  state = {
    password: "",
    repassword: "",
    optionalQuestion: "",
  };
  handlePassword = (password: string) => {
    this.setState({ password: password });
  };
  handleRePassword = (repassword: string) => {
    this.setState({ repassword: repassword });
  };
  handleOptionalQuestion = (optionalQuestion: string) => {
    this.setState({ optionalQuestion: optionalQuestion });
  };

  render() {
    return (
      <PasswordContext.Provider
        value={{
          password: this.state.password,
          repassword: this.state.repassword,
          optionalQuestion: this.state.optionalQuestion,
          handlePassword: this.handlePassword,
          handleRePassword: this.handleRePassword,
          handleOptionalQuestion: this.handleOptionalQuestion,
        }}
      >
        <div>{this.props.children}</div>
      </PasswordContext.Provider>
    );
  }
}

export { PasswordProvider, PasswordContext };
