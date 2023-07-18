import React from 'react';

const Form = ({ children, className, onClick }) => (
  <div className={className} onClick={onClick}>{children}</div>
);


export default Form;