import React from "react";
import {FocusNode} from "@please/lrud";
import {withRouter} from "react-router-dom";
const Button = withRouter(({history}) => (
  <FocusNode
    onSelected={node => this.props.onSelected(node, this)}
    className="Game-button"
    onClick={() => {
      history.push(this.props.link);
    }}
  >
    {this.props.text}
  </FocusNode>
));

export default Button;
