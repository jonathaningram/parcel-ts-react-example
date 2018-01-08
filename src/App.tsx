import React, { Component, Fragment } from "react";

interface Props {
  prop1?: number;
}

export default class App extends Component<Props, {}> {
  render() {
    return (
      <Fragment>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Fragment>
    );
  }
}
