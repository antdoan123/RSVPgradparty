import React from 'react'
import { AiOutlineGithub} from 'react-icons/ai';

function Gift() {


  return (
    <div name="gifts" className='w-full bg-gradient-to-b from-black via-black to-gray-800 text-white '>
        <div className="max-w-7xl p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <h2 className="text-4xl font-bold inline border-b-2 border-blue-200">
                    Gifts
                </h2>
            </div>
            <div>
                Here are some gifts ideas!
            </div>

          <div className="flex items-center justify-center gap-6">

                    <div className='mt-6 text-lg cards'>
                        <h1 className='flex justify-center items-center text-2xl  text-white '>Wishlist</h1>

                        <ul className="list-disc text-gray-400 mt-5">
                            <li>Red Envelopes - Money</li>
                            <li>Clothes - Nike socks, Polo Raphl Lauren, Jackets/Hoodies</li>
                            <li>Gold chains, bracelets, rings</li>
                            <li>Chef Knives, Plates, Utensils Set</li>
                            <li>Gift Cards - Visa, Amazon, Nike, Target</li>
                        </ul>
                    </div>


            </div>
            
        </div>
    </div>
  )
}

export default Gift