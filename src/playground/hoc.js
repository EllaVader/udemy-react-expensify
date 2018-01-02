// Higher Order Component (HOC) - A component (HOC) that renders another component
// Purpose:
// Render code
// Render hijacking
// Prop manipulation
// Abstract

import React from 'react';
import ReactDOM from 'react-dom';

// a regular component
const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
);

// Higher Order component function that returns a HOC
const withAdminWarning = (WrappedComponent) => {
  // this is our HOC
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.  Please don't share!</p>}
      <WrappedComponent { ...props }/>
    </div>
  );
};

// Another example of a Higher Order component function that returns a HOC
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
      <div>
        {props.isAuthenticated ? <WrappedComponent { ...props } /> : <p>Please login before proceeding</p> }
      </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));