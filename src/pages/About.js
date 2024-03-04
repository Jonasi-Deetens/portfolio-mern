import React, { useEffect } from 'react'
import PageTitle from '../components/PageTitle'
import me from '../assets/me.jpg'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='mt-16'>
      <PageTitle title="About" color='bg-gray-100' />
      <div className='w-full md:w-9/12 lg:w-6/12 m-auto p-5'>
        <div className='m-auto'>
          <section className='p-5 m-auto'>
              <h2 className='text-2xl underline mb-10'>Full Stack Developer: Junior</h2>
              <figure className='mb-5'>
                <img className='bg-white p-2 border drop-shadow-sm m-auto h-w-full' width={128} src={me} alt="profile picture of the creator of the website" />
              </figure>
              <p className='text-left'>
                I see myself as someone who is highly motivated and deeply committed to achieving excellence in everything I do.
                I have a natural inclination to strive for perfection, always seeking ways to enhance my abilities and refine my skills.
                <br />
                <br />
                I thrive on challenges because they provide me with opportunities to push my limits and grow both personally and professionally.
              </p>
          </section>
          <br />
          <section className='p-5'>
            <div className='w-10/12 m-auto'>
              <h2 className='text-2xl underline mb-5'>Socials:</h2>
              <ul className='flex flex-col justify-center items-center'>
                  <li className='font-bold'>Github: <a className='font-normal underline hover:text-blue-500' href="https://github.com/Jonasi-Deetens/">Jonasi-Deetens</a></li>
                  <li className='font-bold'>linkedIn: <a className='font-normal underline hover:text-blue-500' href="https://www.linkedin.com/in/jonasi-deetens-41bba4a8/">@JonasiDeetens</a></li>
              </ul>
            </div>
          </section>
          <br />
          <section className='p-5'>
            <div className='w-10/12 m-auto'>
              <h2 className='text-2xl underline mb-5'>Go check me out!</h2>
              <p>Curious to see my coding progress? Click on Track in the navigation bar!</p>
              <p className='mb-5'>Or go ahead and check my CV in the navigation bar if interested.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default About