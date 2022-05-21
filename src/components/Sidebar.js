import React from 'react';

function Sidebar({children}) {
    return <div className="sidebar shadow-lg backdrop-blur backdrop-brightness-105 dark:backdrop-brightness-125 z-50">
        {children}
    </div>;
}

export default Sidebar;