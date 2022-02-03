import React from 'react';
import Navbar from './Navbar';

function Footer() {

  const today = new Date();

  return <div className='mobile:px-40 px-8 mobile:py-10 py-5 bg-[#ffeaed]'>
    <div>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='mobile:mb-2 mb-1 font-semibold'> &copy; Copyrights, All rights reserved, {today.getFullYear()} </h3>
        <div className='border-[#2e2e2e] border-b-2 mobile:w-[215px] w-[190px] mobile:mb-2 mb-1 rounded-xl'></div>
        <h3 className='italic'>Develop by, Akib Siddiquee</h3>
      </div>
      </div>
  </div>;
}

export default Footer;

