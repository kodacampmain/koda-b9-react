import { Component } from "react";

import Header from "../components/Header.jsx";

class Welcome extends Component {
  state = {
    num: this.props.start,
  };
  render() {
    // console.log("state num:", this.state.num);
    return (
      <>
        <Header title="Welcome" />
        {/* <h1>Welcome</h1> */}
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                ...prevState,
                num: prevState.num + 1,
              };
            });
          }}
        >
          Increase Num
        </button>
        <p>Number: {this.state.num}</p>
      </>
    );
  }
}

export default Welcome;
