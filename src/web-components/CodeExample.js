import React, { useEffect, useState } from 'react'

const CodeExample = ({category, item}) => {
  const [codeContent, setCodeContent] = useState('');

  useEffect(() => {
    const fetchCodeContent = async () => {
      try {
        const response = await fetch(item.filePath);
        const text = await response.text();
        setCodeContent(text);
      } catch (error) {
        console.error('Error fetching code content:', error);
      }
    };

    fetchCodeContent();
  }, [item.filePath]);

  return (
    <section className='bg-white max-w-full w-fit m-auto shadow-inner border shadow-blue-500'>
      <h3 className='p-10 text-xl font-bold underline'>Code example: {category} - {item.title}</h3>
      <code className='max-w-full'>
        <pre className='p-10 text-left text-wrap overflow-x-auto'>{codeContent}</pre>
      </code>
    </section>
  )
}

export default CodeExample