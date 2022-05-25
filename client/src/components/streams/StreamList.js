import React from "react";
import { Link } from "react-router-dom";

const StreamList = () => {
  return (
    <div>
      StreamList
      <Link to="/streams/edit">go to stream edit</Link>
    </div>
  );
};

export default StreamList;
