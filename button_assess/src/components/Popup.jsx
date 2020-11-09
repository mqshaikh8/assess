import React from 'react';
import '../popup.css'
function Popup(props) {
  return (
      <div class={props.class}>
          <p>{props.text}</p>
      </div>
  );
}

export default Popup;

