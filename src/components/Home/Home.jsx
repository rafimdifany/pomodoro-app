import React, { Component, Fragment } from "react";
import Timer from "../Timer/Timer";

class Home extends Component {
  render() {
    return(
      <Fragment>
        <div>
          <h1>Hello</h1>
          <Timer/>
        </div>
      </Fragment>
    )
  }
}

export default Home;