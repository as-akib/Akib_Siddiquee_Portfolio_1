import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Navbar() {

    const [open, setOpen] = useState(false)

    return <div>
        <div className='mobile:flex mobile:justify-between mobile:items-center py-3 mobile:px-40 px-8 bg-transparent'>
            <div className='font-extrabold mobile:text-3xl text-lg'>A<span className='text-[#056e69]'>S.</span></div>
            <div className='fixed right-10 top-3 z-50 mobile:hidden cursor-pointer' onClick={()=>setOpen(!open)} >
                { !open ? <MenuIcon /> : <CloseIcon/>}
            </div>
            <div className={`${!open ? "right-[-100%]" : "right-0"} ease-linear duration-500 top-0 mobile:h-fit h-screen mobile:w-[65%] w-[50%] mobile:flex mobile:justify-between mobile:items-center mobile:bg-transparent bg-white mobile:static fixed`}>
                <div className='' >
                    <NavLink style={({ isActive }) => { return { color: isActive ? "#056e69" : "", fontWeight: isActive ? "bold" : "" } }} className='text-sm mobile:inline-block block mobile:ml-14 mobile:my-0 my-6  ml-4 font-semibold text-gray-700 hover:text-[#056e69]' to="/">Home</NavLink>
                    <NavLink style={({ isActive }) => { return { color: isActive ? "#056e69" : "", fontWeight: isActive ? "bold" : "" } }} className='text-sm mobile:inline-block block mobile:ml-14 mobile:my-0 my-6  ml-4 font-semibold text-gray-700 hover:text-[#056e69]' to="/work">Work</NavLink>
                    <NavLink style={({ isActive }) => { return { color: isActive ? "#056e69" : "", fontWeight: isActive ? "bold" : "" } }} className='text-sm mobile:inline-block block mobile:ml-14 mobile:my-0 my-6  ml-4 font-semibold text-gray-700 hover:text-[#056e69]' to="/service">Services</NavLink>
                </div>
                <div className='mobile:flex'>
                    <LinkedInIcon className='ml-5 text-[#056e69] cursor-pointer hover:transition hover:scale-125 hover:delay-75' />
                    <InstagramIcon className='ml-5 text-[#056e69] cursor-pointer hover:transition hover:scale-125 hover:delay-75' />
                    <FacebookIcon className='ml-5 text-[#056e69] cursor-pointer hover:transition hover:scale-125 hover:delay-75' />
                </div>
            </div>
        </div>
    </div>;
}

export default Navbar;
