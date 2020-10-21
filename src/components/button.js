import React from "react";
import {withRouter} from "react-router";
import {FocusNode} from "@please/lrud";
class Button extends React.Component {
  onSelected(e) {
    this.props.onSelected(e, this);
  }
  render() {
    return (
      <FocusNode onSelected={this.onSelected.bind(this)} className="Game-button">
        {this.props.text}
      </FocusNode>
    );
  }
}

export default withRouter(Button);
