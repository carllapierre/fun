import React from 'react';

 function SidebarIcon({icon, selected, text="test", ...rest}) {

    let classes = `${selected ? 'sidebar-icon-selected':''} sidebar-icon dark:border-stone-500 dark:border dark:hover:border-none group`;

    return <div className={classes} {...rest}>
        {icon}
        <span class='sidebar-tooltip scale-0 group-hover:scale-100'>
            {text}
        </span>
    </div>;

 }
 
 export default SidebarIcon;