import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import { Navigate } from 'react-router-dom';
import StreamForm from "./StreamForm";

class StreamCreate extends PureComponent {
  state = {navigate: false};

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
    this.setState({navigate: true})
  };

  render() { //get the user back to the root route
    if (this.state.navigate) {return <Navigate to="/"/>};

    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);