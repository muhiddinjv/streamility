import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from './StreamForm'

let params;

const StreamEdit = (props) => {
  params = useParams();

  useEffect(() => {
    if(params) {
      fetchStream(params.id);
    }
    console.log('mount it!');
  }, []);

  const onSubmit = (formValues) => {
    editStream(formValues);
  };
  console.log('props.stream :>> ', props.stream);
  return (<div>
    <h1>{props?.stream}</h1>
    <div><StreamForm initialValues={props?.stream} onSubmit={onSubmit}/></div>
  </div>)
};

const mapStateToProps = (state) => {
  return {
    stream: state.streams[params?.id],
  };
};

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);
