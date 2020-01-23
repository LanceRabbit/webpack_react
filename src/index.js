import React from "react";
import ReactDOM from "react-dom";
class Head extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return <h3>Hello React JSX~!!</h3>
  }
}
ReactDOM.render(<Head/>, document.querySelector("#app"));