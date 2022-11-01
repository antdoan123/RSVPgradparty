import { data } from 'autoprefixer';
import React from 'react'
import { AiOutlineGithub, AiOutlineFilePdf, AiFillLinkedin, AiFillMail, AiOutlineCaretDown} from 'react-icons/ai';
import { FaMehBlank } from 'react-icons/fa';
import { Link } from 'react-scroll'

const Form = () => {


  return (
    <div name="RSVP" className='h-screen w-full bg-gradient-to-b from-gray-800 to-black '>

            <div className="max-w-7xl p-4 mx-auto flex flex-col justify-center ">
                <div className='pb-8'>
                    <h2 className="text-4xl font-bold inline border-b-2 border-blue-200 text-white">
                        Reservation
                    </h2>
                </div>
                <p className='mx-auto text-xl text-white'>Fill out the fields and hit submit to rsvp</p>
  
            </div>
            <div className='lg:w-1/2 md:w-2/3 mx-auto'>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-1/2'>
                            <div className='relative'>
                                <label for="name" className='leading-7 text-lg text-white'>Name </label>
                                <input type="text" id="Name" name="name" className='form-data w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 
                                focus:border-blue-500 focus:bg-white focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors
                                duration duration-200 ease-in-out'></input>
                            </div>
                        </div>
                        <div className='p-2 w-1/2'>
                            <div className='relative'>
                                <label for="phone" className='leading-7 text-lg text-white'>Phone </label>
                                <input type="tel" id="Phone" name="phone" className='form-data w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 
                                focus:border-blue-500 focus:bg-white focus:ring-blue-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors
                                duration duration-200 ease-in-out'></input>
                            </div>
                        </div>
                        <div className='flex items-center justify-center p-2 w-full'>
                            <a href="https://forms.gle/iFPbMyJrSExeJGVW6" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-full px-4 py-2 mt-4 text-lg font-medium text-white rounded-3xl uppercase
                             transform bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>Submit</a>
                        </div>
                    </div>
            </div>  
    </div>
    
    

  )
  
}

/*
        <div className='wrapper m-12' id="completion-msg" style="display: none">
            <div>
                <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>Thank you for RSVP! See you soon!</h1>
                <button onClick={window.location.reload()}>Refresh Page</button>
            </div>
        </div>   

        <script>
            function send_data() {
                var form_data = document.getElementsByClassName("form-data"); //retrieve filled form data
                var i;
                var data = [];
                for(i=0; i<form_data.length; i++){
                    data.push(form_data[i].value);
                }
                google.script.run.savaData(data); //send to google app script
                document.getElementbyID("form").style.display = "none"; //make form invisible
                document.getElementbyID("completion-msg").style.display = "block"; //to give completion form feedback
            }
        </script>
*/

export default Form