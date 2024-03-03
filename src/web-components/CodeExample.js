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
    <section className='bg-white w-fit m-auto border border-black'>
      <h3 className='p-2 text-xl font-bold underline'>Code example: {category} - {item.title}</h3>
      <code className='max-w-full'>
        <pre className='p-10 text-left text-wrap'>{codeContent}</pre>
      </code>
    </section>
  )
}

export default CodeExample