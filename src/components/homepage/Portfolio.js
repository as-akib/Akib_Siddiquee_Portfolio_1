import React from 'react';
import Title from './Title';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';

function Portfolio() {

    const works = [
        {
            id: 1,
            img: "https://cdn.dribbble.com/users/5302544/screenshots/16391775/media/2e6cc814285e207b553bb6acbd08ba22.png"

        },
        {
            id: 2,
            img: 'https://cdn.dribbble.com/users/5302544/screenshots/16383690/media/6e898d19a007b7d9f05efee4c144aeb5.png'

        },
        {
            id: 3,
            img: "https://cdn.dribbble.com/users/5302544/screenshots/14902686/media/e03e1089bc732ff0cdbc365544caf556.png"

        },
        {
            id: 4,
            img: "https://cdn.dribbble.com/users/5302544/screenshots/16338140/media/71ba5ab1d73b34ecf939499f8401a77e.png"

        }
    ]

    return <div>
        <div className='mobile:px-40 px-8 mobile:py-20 py-10 bg-[#ffeaed]'>
            <div className='mobile:flex mobile:justify-between mobile:items-center mb-5'>
                <Title title={"portfolio"} mainTitle={"All creative works"} />
                <div className='mobile:flex mobile:justify-between mobile:items-center text-[#056e69] '>
                    <Link to="/work" className='mr-2 font-bold text-sm'>Explore more</Link>
                    <ArrowRightAltIcon />
                </div>
            </div>
            <div className='mobile:flex mobile:justify-between mobile:flex-wrap'>
                {works.map(work => 
                    <div key={work.id} className='mobile:w-[48%] w-[100%] mb-10 '>
                        <img src={work.img} className='w-[100%] transition duration-500 hover:shadow-2xl rounded-xl' />
                    </div>
                )}
            </div>
      </div>
  </div>;
}

export default Portfolio;
