import React, { useEffect, useState } from 'react'

const CodeExample = ({item}) => {
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
    <section className='bg-white m-2 border border-black'>
      <h3 className='p-2 text-xl font-bold underline'>Code example: {item.title}</h3>
      <code>
        <pre className='text-left p-10'>{codeContent}</pre>
      </code>
    </section>
  )
}

export default CodeExample