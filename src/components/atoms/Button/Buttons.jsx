import React from 'react';


const Buttons = ({children, onClick, className}) => {
    return (
        <>
            <button className={className} onClick={onClick}>{children}</button>
        </>
    );
};

export default Buttons;