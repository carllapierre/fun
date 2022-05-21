import React from 'react';

const STAR_COLOR = '#fefabd'

const getRandomPos = () => {
    return Math.floor(Math.random() * 2000)
}
const getNStars = (n) => {

    let starList = `${getRandomPos()}px ${getRandomPos()}px ${STAR_COLOR}`
    for (let i = 0; i < n; i++){
        starList += `, ${getRandomPos()}px ${getRandomPos()}px ${STAR_COLOR}`
    }
    return starList;
}


function Stars() {

    //create a parallax effect using three depths of stars
    let dynamicStars1 = {width: '1px', height: '1px', boxShadow: getNStars(1000)}
    let dynamicStars2 = {width: '2px', height: '2px', boxShadow: getNStars(200)}
    let dynamicStars3 = {width: '3px', height: '3px', boxShadow: getNStars(50)}

    return ( <>
        <div className='h-full w-full fixed'>
            <div style={dynamicStars1} className='bg-transparent rounded animate-[animateStars_350s_linear_infinite]'></div>
            <div style={dynamicStars2} className='bg-transparent rounded animate-[animateStars_300s_linear_infinite]'></div>
            <div style={dynamicStars3} className='bg-transparent rounded animate-[animateStars_250s_linear_infinite]'></div>
        </div>
        <div style={{backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(46 23 47 / 90%))'}} 
             className='fixed w-full bottom-0 h-1/4'></div>
        {/* Need to duplicate the stars under and have the duplicate translate up to cover the missing stars of the first anim until it resets */}
        <div className='h-full w-full top-[2000px] fixed'>
            <div style={dynamicStars1} className='bg-transparent rounded animate-[animateStars_350s_linear_infinite]'></div>
            <div style={dynamicStars2} className='bg-transparent rounded animate-[animateStars_300s_linear_infinite]'></div>
            <div style={dynamicStars3} className='bg-transparent rounded animate-[animateStars_250s_linear_infinite]'></div>
        </div>

    </>);
}

export default Stars;