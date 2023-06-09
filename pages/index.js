import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, GiSnakeSpiral } from 'react-icons/ai';
import Image from 'next/image';
import kanye from '../public/kanye.png'
import design from '../public/assets/design2.png'
import consulting from '../public//assets/consulting.jpg'
import coding from '../public/assets/coding.jpg'
import Gamelist from '../public/projects-assets/TheGameList.png'
import Weather from '../public/projects-assets/WeatherDashboard.png'
import MovieApp from '../public/projects-assets/MovieApp.png'
import Password from '../public/projects-assets/Password Generator.png'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-violet-600'>developed by almoral323</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className=' bg-gradient-to-r  from-orange-500 to-violet-700 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-orange-500 font-medium md:text-6xl'>Alfredo Morales</h2>
            <h3 className='text-2xl py-2  text-violet-700 md:text-3xl'>Developer and Designer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>Description HERE</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className='relative mx-auto bg-gradient-to-b  from-orange-500 to-violet-700 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={kanye} fill="fill" />
          </div>
        </section>

        <section >
          <div className='text-center '>
            <h3 className='text-3xl py-1  dark:text-orange-600'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'> Description of what I've done in the past and my journey. Mention project ive completed to businesses and people.</p>
            <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'> A continued description with some more text here.</p>
          </div>

          <div className='lg:flex gap-10 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center  dark:bg-violet-950/50 dark:text-orange-600'>
              <Image src={coding} width={200} height={100} className='rounded-3xl' />
              <h3 className='text-lg font-medium pt-8 pb-2  dark:text-orange-500'>
                Experienced Coding
              </h3>

              <p className='py-2'>
                Proficient in developing full stack applications with the lastest web security technologies.
              </p>

              <h4 className='py-4 text-violet-700  dark:text-violet-400'>Coding Languages, Libraies, and Frameworks</h4>
              <div className='flex justify-between gap-9'>
                <div className='text-gray-800 py-1 text-left  dark:text-white'>
                  <p>HTML-CSS-Javascript</p>
                  <p>REACT</p>
                  <p>Next.js</p>
                  <p>Node.js</p>
                  <p>Tailwind</p>
                </div>
                <div className='text-gray-800 py-1 text-right  dark:text-white'>
                  <p>Bootstrap</p>
                  <p>Handlebars.js</p>
                  <p>MongoDb</p>
                  <p>MySQL</p>
                  <p>GraphQL</p>
                </div>
              </div>
            </div>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <div className='flex flex-col items-center'>
              <Image src={design} width={200} height={100} className=' rounded-3xl' />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Attractive Designs
              </h3>

              <p className='py-2'>
                Developing elegant and professional desgins that suit you needs and vision.
              </p>

              <h4 className='py-4 text-violet-700'>Design Tools</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p>Illustrator</p>
            </div>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <div className='flex flex-col items-center'>
              <Image src={consulting} width={200} height={100} className=' rounded-3xl' />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Efficient Consultations
              </h3>

              <p className='py-2'>
                Clear and productive consulting to best plan and map your product.
              </p>

              <h4 className='py-4 text-violet-700'>Forms of contact</h4>
              <p className='text-gray-800 py-1'>Email</p>
              <p>Zoom</p>
              <p>or</p>
              <p>Right HERE!</p>
            </div>
          </div>
        </section>

        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 text-justify-left'> Description of what I've done in the past and my journey. Mention project ive completed to businesses and people.</p>
            <p className='text-md py-2 leading-8 text-gray-800 text-justify-left'> A continued description with some more text here.</p>
          </div>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={Gamelist} className='rounded-lg object-cover w-100 h-100'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Weather} className='rounded-lg object-cover  w-100 h-100' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={MovieApp} className='rounded-lg object-cover  w-100 h-100' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={Password} className='rounded-lg object-cover  w-100 h-100' />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
