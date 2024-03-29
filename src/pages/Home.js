import React, { useEffect } from 'react'
import TextAndImage from '../components/TextAndImage'
import homeContent from '../content/homeContent'
import ImageAndText from '../components/ImageAndText'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className='w-11/12 lg:w-10/12 bg-white m-auto text-left'>
      <section className='p-10'>
        <h2 className='font-bold text-2xl text-center border-b-2 p-5'>Welcome to my course tracker.</h2>
        <br />
        <p className='mt-10'>Follow my journey and keep track of my educational achievements with my Course Tracker. Designed for fellow students, or a professional seeking knowledge of the depth of my skills, this platform is designed to help organize and reflect my learning experiences.</p>
        <p>With this Course Tracker, I can easily catalog all the courses I've completed, ranging from academic subjects to personal development topics. Every course I undertake contributes to my growth and understanding of full stack development.</p>
        <br />
      </section>
      <section>
        <h2 className='font-bold text-2xl text-center border-b-2 p-5'>What do I do here?</h2>
        <br />
        {homeContent.map((content, index) => (
          <div key={`section-${index}`}>
          {(index % 2) === 0 ? 
            <TextAndImage text={content.text} src={content.src} alt={content.alt} /> :
            <ImageAndText text={content.text} src={content.src} alt={content.alt} />
          }
      </div>
        ))}
      </section>
    </main>
  )
}

export default Home