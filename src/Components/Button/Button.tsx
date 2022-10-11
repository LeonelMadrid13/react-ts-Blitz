import * as React from 'react';
import './style.css';
import List from "../List/List"

export default function Button() {
  var clicked = false;
  
  return (
    <div>
      <button onClick={List}>Click me</button>
    </div>
  );
}
