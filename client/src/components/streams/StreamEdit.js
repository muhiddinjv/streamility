import _ from 'lodash';
import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from './StreamForm'

let params;

const StreamEdit = (props) => {
  params = useParams();

  useEffect(() => {
    // if(params) {
      fetchStream(params.id);
    // }
    console.log('mount it!');
  }, []);

  const onSubmit = (formValues) => {
    console.log('formValues :>> ', formValues);
    editStream(params.id, formValues);
  };

  // if (!props.stream) return <h1>Loading...</h1>
  
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
