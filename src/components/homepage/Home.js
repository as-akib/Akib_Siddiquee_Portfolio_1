import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Contact from './Contact';
import MySkills from './MySkills';
import Portfolio from './Portfolio';

function Home() {
  return <div>
            <div className="bg-[url('../public/bg1.png')] mobile:min-h-full min-h-fit w-full bg-cover">
                <Navbar/>
                <div className=' mobile:px-40 px-8'>
                  <div className='mobile:flex mobile:justify-between mobile:items-center flex flex-wrap justify-center items-center'>
                      <div className='mobile:w-5/12 mb-5'>
                        <h1 className='mobile:text-5xl text-4xl text-gray-800 font-bold leading-tight tracking-wider'>Hello,<br/>I'm <span className='text-[#056e69]'>Akib</span></h1>
                        <h3 className='mobile:text-lg text-base text-gray-800 font-medium my-3'>UX/UI Designer</h3>
                        <p className='text-gray-600 tracking-wider mb-5'>
                        Hi, my name is Akib. I'm a UX/UI Designer from Bangladesh.
                        I have over 3years experience in leading teams amd digital products.
                    </p>
                    <a target="blank" href="https://drive.google.com/file/d/1Mj1sCv2vf2UoHT8V46bKxGt5mP1mW1ca/view?usp=sharing" className='bg-[#056e69] transition duration-300 mobile:px-5 px-4 mobile:py-2 py-2 text-white font-semibold text-center rounded-md hover:bg-[#06aaa2]'>My Resume</a>
                      </div>
                      <div className='mr-28'>
                        <img src="/man1.1.png" className='mobile:w-11/12 mobile:block hidden'/>
                      </div>
                    </div>
                </div>
            </div>
    <MySkills />
    <Portfolio />
    <Contact />
    <Footer />
          </div>;
}

export default Home;
