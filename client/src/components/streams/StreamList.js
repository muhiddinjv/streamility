import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends PureComponent {
  componentDidMount(){
    this.props.fetchStreams();
  }
  
  render(){
    return (
      <div>
        StreamList
        <Link to="/streams/edit">go to stream edit</Link>
      </div>
    );
  }
};

export default connect(null, { fetchStreams })(StreamList);
