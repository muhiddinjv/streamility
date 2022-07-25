import _ from 'lodash';
import React, {useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from './StreamForm'

let params;

const StreamEdit = (props) => {
  params = useParams();

  // useEffect(() => {
    fetchStream(params.id);
  // }, []);

  const onSubmit = (formValues) => {
    editStream(params.id, formValues);
  };

  console.log('props.stream', props.stream)
  return (
  <div>
    <h1>{props?.stream?.title}</h1>
    <div><StreamForm initialValues={_.pick(props.stream,'title','description')} onSubmit={onSubmit}/></div>
  </div>)
};

const mapStateToProps = (state) => {
  return {
    stream: state.streams[params?.id],
  };
};

export default connect(mapStateToProps,{fetchStream, editStream})(StreamEdit);
