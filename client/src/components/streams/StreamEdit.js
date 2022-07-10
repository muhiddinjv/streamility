import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

let params;

const StreamEdit = (props) => {
  params = useParams();

  useEffect(() => {
    if(params) {
      fetchStreams(params.id);
    }
    console.log('mount it!');
  }, []);
  

  console.log('props :>> ', props);
  return <div>StreamEdit</div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps :>> ', ownProps);
  console.log('params :>> ', params);
  return {
    stream: state.streams[params?.id],
  };
};

export default connect(mapStateToProps)(StreamEdit);
