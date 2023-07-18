import React from 'react';

const Input = ({children, className, type, placeholder, name, id}) => {
    return (
        <>
          <input 
            className={className}
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
          >
            {children}
          </input> 
        </>
    );
};

export default Input;