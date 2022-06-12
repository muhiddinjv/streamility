import React from 'react';
import { useParams } from 'react-router-dom';


const StreamEdit = () => {
  const params = useParams();
  console.log('params :>> ', params);
  return (
    <div>StreamEdit</div>
  )
}

export default StreamEdit;