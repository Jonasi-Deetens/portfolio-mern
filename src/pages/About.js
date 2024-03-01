import React from 'react'
import PageTitle from '../components/PageTitle'

const About = () => {
  return (
    <main className='m-auto mt-16'>
        <PageTitle title="About" color='bg-gray-100' />
        <div className='text-center m-auto'>
          <section className='bg-blue-600 p-20 m-auto'>
              <h2 className='text-2xl underline mb-5'>My Mission</h2>
              <p className='w-10/12 m-auto'>When making my Course Tracker, my mission is to help myself track my progress in coding. I understand that learning to code can be challenging, and I aim to provide a platform where I can easily monitor the coding courses I have completed.</p>
          </section>
          <br />
          <section className='p-20'>
            <div className='w-10/12 m-auto'>
              <h2 className='text-2xl underline mb-5'>What My Site Offers</h2>
              <p className='font-bold'>I offer a simple and intuitive tracking system where I can:</p>
              <br />
              <ul className='list-disc flex flex-col justify-center items-center'>
                  <li>Keep track of coding courses I have completed</li>
                  <li>Set goals for future learning</li>
                  <li>View my learning progress over time</li>
              </ul>
            </div>
          </section>
          <br />
          <section className='bg-blue-600 p-20'>
            <div className='w-10/12 m-auto'>
              <h2 className='text-2xl underline mb-5'>Why Choose Me?</h2>
              <p className='font-bold'>Check my track to see if I've learned what you need, and/or if I am almost the right fit for you.</p>
              <br />
              <ul className='flex flex-col justify-center items-center'>
                  <li className='font-bold'>Github: <a className='text-white underline hover:text-black' href="https://github.com/Jonasi-Deetens/">Jonasi-Deetens</a></li>
                  <li className='font-bold'>linkedIn: <a className='text-white underline hover:text-black' href="https://www.linkedin.com/in/jonasi-deetens-41bba4a8/">@JonasiDeetens</a></li>
              </ul>
            </div>
          </section>
          <br />
          <section className='p-20'>
            <div className='w-10/12 m-auto'>
              <h2 className='text-2xl underline mb-5'>Go check me out!</h2>
              <p>Curious to see my coding progress? Click on Track in the navigation bar!</p>
            </div>
          </section>
        </div>
    </main>
  )
}

export default About