import React from 'react';

const Loading = ({ color = 'gray' }) =>
  <div id="loading">
    <div className="lds-css">
      <div className={`lds-ring ${color}-ring`}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>;

export default Loading;
