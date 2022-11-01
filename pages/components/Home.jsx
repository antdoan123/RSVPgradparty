import React from 'react'
import { AiOutlineGithub, AiOutlineFilePdf, AiFillLinkedin, AiFillMail, AiOutlineCaretDown} from 'react-icons/ai';
import { FaMehBlank } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Home = () => {


        const links = [
        {
            id: 1,
            icons: (
            <AiOutlineGithub size={'36'}/>
            ),
            href: "https://github.com/antdoan123",
        },
        {
            id: 2,
            icons: (
            <AiFillLinkedin size={"36"}/>
            ),
            href: "https://www.linkedin.com/in/anthony-doan-9176a21b8/",
        },
        {
            id: 3,
            icons: (
            <AiFillMail size={"36"}/>
            ),
            href: "mailto:antdoan1999@gmail.com",
        },
        {
            id: 4,
            icons: (
            <AiOutlineFilePdf size={"36"}/>
            ),
            href: "/resume.pdf",
        },
    ]
    

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
        <div className='max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-4 md:text-row'>
            <div className='flex md:flex-row flex-col items-center justify-center h-full'>
                <img className="h-60 mt-32 md:mt-0 md:mb-12 rounded-lg" src="./pics.png"></img>

                <div className='text-white px-5 py-4 max-w-md mt-6'>
                    <h2 className='text-xl'><span className='font-bold text-blue-200'>Event: </span>Anthony&apos;s Grad Party</h2>
                    <h2 className='text-xl'><span className='font-bold text-blue-200'>Date:  </span>Friday, Jan 20, 2023</h2>
                    <h2 className='text-xl'><span className='font-bold text-blue-200'>Time:  </span>6:00pm - 12:00am</h2>
                    <h2 className='text-xl'><span className='font-bold text-blue-200'>Location:  </span>Santa Fe Spring Social Halls</h2>
                    <h2 className='text-xl'><span className='font-bold text-blue-200'>Address:  </span><a href="https://maps.app.goo.gl/8fa62FjLY4vQhSMG9?g_st=ic" target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-blue-400'>11710 Telegraph Rd, Santa Fe Springs, CA 90670</a></h2>
                    <h2 className='text-xl'><span className='font-bold text-blue-200'>Description: </span>Celebrating Anthony&apos;s Graduation with a BS Computer Engineering degree <a href="#" className='hover:underline hover:text-blue-400'>@Cal Poly Pomona</a> w/ 3.79 GPA</h2>
                    <div className="flex flex-nowrap mt-4 items-center justify-center px-12 md:px-24  text-gray-500">

                        <a href="https://forms.gle/iFPbMyJrSExeJGVW6" target="_blank" rel="noopener noreferrer" className="flex text-white w-fit px-20 py-3 my-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200">
                            RSVP
                        </a>

                    </div>
                </div>


            </div>

        </div>
    </div>
  )
}

export default Home