import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./streamForm";

class streamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h2>Create a stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(streamCreate);
