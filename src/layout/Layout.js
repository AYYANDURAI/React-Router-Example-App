import React from 'react';

const Layout = (props) => {
    return (
        <div className="text-center p-10 flex-1">
            {props.children}
        </div>
    );
}

export default Layout;