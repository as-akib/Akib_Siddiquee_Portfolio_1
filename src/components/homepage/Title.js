import React from 'react';

function Title({title, mainTitle}) {
    return <div>
        <h4 className='mobile:text-xl text-lg font-medium text-zinc-600 tracking-wide monile:mb-2 uppercase'>{ title }</h4>
        <h3 className='mobile:text-3xl text-2xl font-bold text-gray-800  pb-4  capitalize'>{mainTitle}</h3>
        <div className='border-[#056e69] border-b-4 mobile:w-[215px] w-[190px] mobile:mb-5 mb-3 rounded-xl'></div>
  </div>;
}

export default Title;
