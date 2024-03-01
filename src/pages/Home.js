import React from 'react'
import PageTitle from '../web-components/PageTitle'

const Home = () => {
  return (
    <main className='w-10/12 p-20 bg-white m-auto text-left'>
      <PageTitle title="Welcome to my course tracker." />
      <p>Follow my journey and keep track of my educational achievements with my Course Tracker. Designed for fellow student, or a professional seeking knowledge of the depth of my skills, this platform is designed to help organize and reflect my learning experiences.</p>
      <p>With thid Course Tracker, I can easily catalog all the courses I've completed, ranging from academic subjects to personal development topics. Every course I undertake contributes to my growth and understanding of full stack development.</p>
      <br />
      <p>The intuitive interface allows me to:</p>
      <ul className='list-disc'>
          <li className='ml-10'>Record details of each course, including the title, github link, and an example.</li>
          <li className='ml-10'>Summarize key learnings and insights gained from my studies.</li>
          <li className='ml-10'>Set goals for future learning endeavors.</li>
          <li className='ml-10'>Display my set of skill to a community of learners, or people who want to hire me.</li>
      </ul>
      <br />
      <p>Join me in fostering a culture of continuous learning and personal development. Follow the transformative power of education that unlock new opportunities for my growth and success.</p>
      <p>Follow my journey with my Course Tracker today!</p>
    </main>
  )
}

export default Home