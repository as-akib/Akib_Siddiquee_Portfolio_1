import React from 'react';
import Title from './Title';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton';

function Contact() {

    const handleCopy = () => {
        var text = document.getElementById("emailbox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    return <div>
        <div className='mobile:px-40 px-8 mobile:py-20 py-10 bg-[#e7ffff]'>
            <Title title={"contact me"} mainTitle={"Got a project? let's talk"} />
            <div className='mobile:flex mobile:justify-between mobile:items-center'>
                <div className='mobile:text-2xl text-xl mb-3 font-medium capitalize tracking-wide '>
                    <h2>Estimated your project?</h2>
                    <h2>Let's me know here</h2>
                </div>
                <div className='flex items-center'>
                    <input id='emailbox' type="email" value="akibsiddiquee31@gmail.com" className='w-64 bg-transparent border-2 rounded-lg border-[#056e69] py-2 px-2 text-center font-semibold text-lg cursor-text' disabled />
                    <IconButton onClick={handleCopy}>
                        <FileCopyOutlinedIcon fontSize='medium' className='ml-0 text-[#056e69] cursor-pointer' />
                    </IconButton>
                </div>
            </div>
      </div>
  </div>;
}

export default Contact;
