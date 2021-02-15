import React from 'react';
import PropTypes from "prop-types"
function Food() {
  return <h1>I like Food</h1>
}

function App() {
  return <div><h1>Hello</h1><Food fav="Kimchi" /></div>
}

export default App;
