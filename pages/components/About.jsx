import React from 'react'
import { AiOutlineGithub} from 'react-icons/ai';

function About() {


  return (
    <div name="about" className='w-full bg-gradient-to-b from-black via-black to-gray-800 text-white '>
        <div className="max-w-7xl p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
                <h2 className="text-4xl font-bold inline border-b-2 border-blue-200">
                    About Me
                </h2>
            </div>
            <div className='text-xl'>
                A  little about my journey!
            </div>

          <div className="flex flex-col items-center justify-center pb-8 ">

            <h1 className='text-2xl font-bold pb-8'>Buena Park High School</h1>
            <p className='pb-8'>High school was the start of my journey. It was the four years that had the most impact in my life.
            Starting with basketball. My first two years of high school was when I found my hobby for basketball. Through this I learned self discipline, respect, and most importantly importantly it helped me 
            grow confidence in myself. Through basketball, I learned to keep myself in shape, time management, and leadership. And during my sophmore year, I was team captain and won defensive player of the year on my team.
            For my academics, my classes were filled with APs and early college classes. But high school, tbh was a breeze. I finish top 25 in my whole class of 2018, ranked 11 with a 4.54 GPA. However, despite all my college 
            acceptance, I decieded to start off at a community college to save money. </p>

            <h1 className='text-2xl font-bold pb-8'>Cypress/Fullerton College</h1>
            <p className='pb-8'>Starting college was when reality hit me. My first semester at college, I took 19 units while working around 30-35 hours a week just to pay for school.
            It was a time of burnouts, stress, doubts, and a hit of reality. Two of my toughest courses during my first semester was Calculus II and Intro to C++. Walking into these two classes, and 
            looking around my classmates, I knew I didn&apos;t fit in and had already doubted myself. From trying to balance family, love life, and work, I had a hard time focusing on my studies, 
            and I almost failed both my calc II class and C++ class. It was the first time in my life I saw a D on my grades and I remember being so scared to disappoint my dad. However, I was 
            always the guy who do not like keeping secrets and I told him the truth. He was very understanding and told me to stop overthinking it and view it as easy, and that changed my perspective on 
            everything. The more I view school as easy, surprisely everything did became easy. I brought my grades back up, I learned how to balance my life, work and school, and I started to achieve everything that
            I wanted. During these two years at community college, I earned an associate degree in Mathematics and graduated with a 3.72 GPA</p>

            <h1 className='text-2xl font-bold pb-8'>Cal Poly Pomona</h1>
            <p className='pb-8'>Going to Cal Poly Pomona, COVID hit. I choose this school because it was known for its hands on experience, however with COVID it ruined everything. Or so I thought.
            While COVID wasn&apos;t ideal, it lead me to meet a lot of people through discord. And because we weren&apos;t in an actually classroom, no one can judge one another based on how they look. Through 
            messaging and voice chats, I was able to find a group of people who had helped me throughout my CPP years. We motivate each other to do better, keep each other accountable, and learned to work 
            like a team. However, CPP got expensive. I was paying 4x more than at a community college, and thats not including the cost of gas and other expenses. But because of that, it forces me to start side 
            hustles, start buisnesses, learn how to network and market with people online. And at the end of the day, I can proudly say I am graduating with a BS in Computer Engineering with a 3.79 GPA.</p>
            </div>
            
        </div>
    </div>
  )
}

export default About