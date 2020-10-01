import React from "react";
const PasswordContext = React.createContext();

class PasswordProvider extends React.Component {
  state = {
    password: "",
    repassword: "",
    optionalQuestion: "",
  };
  handlePassword = (password) => {
    this.setState({ password: password });
  };
  handleRePassword = (repassword) => {
    this.setState({ repassword: repassword });
  };
  handleOptionalQuestion = (optionalQuestion) => {
    this.setState({ optionalQuestion: optionalQuestion });
  };

  render() {
    return (
      <PasswordContext.Provider
        value={{
          password: this.state.password,
          repassword: this.state.repassword,
          optionalQuestion: this.optionalQuestion,
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
