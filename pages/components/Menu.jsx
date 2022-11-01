import React from 'react'
import { AiOutlineGithub} from 'react-icons/ai';

function Menu() {


  return (
    <div name="menu" className='w-full bg-gradient-to-b from-gray-800 to-black text-white '>
        <div className="max-w-7xl p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <h2 className="text-4xl font-bold inline border-b-2 border-blue-200">
                    Menu
                </h2>
            </div>
            <div>
                Check out the food and drink menu! <span className='text-xs'> * subject to change</span>
            </div>

          <div className="grid grid-cols md:grid-cols-2 gap-6">

                    <div className='mt-6 text-lg cards'>
                        <h1 className='flex justify-center items-center text-2xl  text-white '>Food Menu</h1>

                        <ul className="list-disc text-gray-400 mt-5">
                            <li>Mexican Tacos | Carne Asada, Al Pastor, Chicken with topping bar</li>
                            <li>Fried Rice | Scrambled eggs, Homemade aji verde aioli (spicy), Scallions</li>
                            <li>Garlic Noodz | Wheat Noodles, Butter, Garlic, Parmesan Cheese, Secret-sauce, Scallions, radish</li>
                            <li>Banh Beo | Steam Flour, Shredded Shrimp, Fried Shallot</li>
                            <li>Egg Rolls | Pork, Wood Ear Mushroom, Vermicelli, Asian greens, Lime Chili Fish Sauce</li>
                        </ul>
                    </div>

                    <div className='mt-6 text-lg cards'>
                        <h1 className='flex justify-center items-center text-2xl  text-white'>Drinks Menu</h1>

                        <ul className="list-disc text-gray-400 mt-5">
                            <li>Amaretto Sour | Almond-flavored liqueur, Lemon, simple syrup</li>
                            <li>Dr. Corona | Almond-flavored liqueur, Corona Beer</li>
                            <li>Henny and Coke | Hennessy Cognac, Cola-cola</li>
                            <li>Princess Violet | Gin, Butterfly Tea, Fever-Tree Tonic</li>
                            <li>Spirits | Hennesy Cognac, Well Tequila, Well Vodka</li>

                        </ul>
                    </div>

            </div>
            
        </div>
    </div>
  )
}

export default Menu