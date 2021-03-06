import React, { Component } from "react";
import { Button } from "antd";
import history from "./history";
import styled from "styled-components";

const Margins = styled.div`
  margin: 100px;
  margin-left: 300px;
  margin-right: 300px;
`;

// let history = useHistory();

export default class HomePage extends Component {
  goToRegistration = () => {
    history.push("/register");
  };

  render() {
    return (
      <Margins>
        <h1>Login</h1>
        <Button onClick={this.goToRegistration}>Register now!</Button>
      </Margins>
    );
  }
}
