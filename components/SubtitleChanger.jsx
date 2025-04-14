'use client';
// components/SubtitleChanger.jsx
import { useState, useEffect } from 'react';

export default function SubtitleChanger({ subtitles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % subtitles.length);
    }, 3000); // Change de sous-titre toutes les 3 secondes
    return () => clearInterval(interval);
  }, [subtitles]);

  return (
    <h2 className="text-blakc text-2xl mt-4 transition-all duration-500">
      {subtitles[index]}
    </h2>
  );
}
