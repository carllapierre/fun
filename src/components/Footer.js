import React from 'react';
import Landscape from '../content/svg/Landscape.svg'

function Footer ({theme}) {
    return ( 
        <div className='overflow-hidden max-h-[450px] fixed max-w-6xl w-full scale-x-[-1] right-[0px] bottom-0 dark:saturate-50 dark:brightness-[0.2] z-10'>
            <img src={Landscape} alt='trees' className='w-[120%] scale-[1.025]'/>
        </div>
    );
}

export default Footer ;