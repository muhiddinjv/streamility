import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import history from '../../history';

class StreamList extends PureComponent {
  componentDidMount() {
    this.props.fetchStreams();
  }//window.location.href = "/insert/your/path/here"

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <div className="ui button primary" onClick={()=>history.push(`/streams/edit/${stream.id}`)}>Edit</div>
          {/* <Link className="ui button primary" to={`/streams/edit/${stream.id}`}>Edit</Link> */}
          <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link className="ui button primary" to="/streams/new">Create Stream</Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
