import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<StreamList />} />
        <Route path="/streams/new" exact element={<StreamCreate />} />
        <Route path="/streams/edit" exact element={<StreamEdit />} />
        <Route path="/streams/delete" exact element={<StreamDelete />} />
        <Route path="/streams/show" exact element={<StreamShow />} />
      </Routes>
    </Router>
  );
};

export default App;
