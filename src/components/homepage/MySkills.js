import React from 'react';
import Title from './Title';

function MySkills() {

    const skills = [
        {
            name: "UX/UI Design",
            detail: "User experience design is a human-first way of designing product. Don Norman, a cognitive scientist ans co-founder of the Neilsen Norman Group Design Consultancy."
        },
        {
            name: "Branding",
            detail: "Branding is the process of giving a meaning to specific organization, company, products or services by creating and shaping a brand in consumers' minds."
        },
        {
            name: "Front-End Development",
            detail: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly."
        }
    ]

    return <div>
                <div className='mobile:px-40 px-8 mobile:py-20 py-10 bg-[#e7ffff]'>
                    <div>
                <Title title={"My Skills"} mainTitle={ "My expertise" }/>
                    </div>
                    <div className='mobile:flex'>
                        {skills.map(skill => {
                                    return <div className='mobile:w-96 p-7 mr-4 rounded-lg hover:bg-white hover:shadow-2xl transition delay-100 cursor-pointer'>
                                                <h2 className='text-xl text-gray-800 font-semibold pb-3'>{skill.name}</h2>
                                                <p className='text-gray-600 tracking-wider'>{skill.detail}</p>
                                            </div>
                        })}
                        
                    </div>
                </div>
            </div>;
}

export default MySkills;
