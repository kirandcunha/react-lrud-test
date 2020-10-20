import React from "react";
import {FocusNode} from "@please/lrud";
class Button extends React.Component {
  render() {
    return <FocusNode  className="Game-button">{this.props.text}</FocusNode >;
  }
}

export default Button;
