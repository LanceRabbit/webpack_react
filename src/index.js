import React from "react";
import ReactDOM from "react-dom";

let elem = React.createElement("h3", {}, "Hello React");
ReactDOM.render(elem, document.querySelector("#root"));