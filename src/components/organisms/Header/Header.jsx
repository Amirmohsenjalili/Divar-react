import React from 'react';

const Header = ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Header;