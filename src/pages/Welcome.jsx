import { Component } from "react";

class Welcome extends Component {
  state = {
    num: 0,
  };
  render() {
    console.log("state num:", this.state.num);
    return (
      <>
        <h1>Welcome</h1>
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
      </>
    );
  }
}

export default Welcome;
