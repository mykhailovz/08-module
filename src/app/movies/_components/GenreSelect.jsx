'use client';

import { useState } from 'react';
import Link from 'next/link';

function GenreSelect({ genres, genre }) {
  const [selectedGenre, setSelectedGenre] = useState(genre);

  function handleClick(genre) {
    setSelectedGenre(genre);
  }

  return (
    <ul id="genres-list" data-testid='genres-list' className="flex flex-wrap items-center justify-center text-gray-900 dark:text-white">
      {genres.map(g => {
        return (
          <li className={`${selectedGenre === g ? 'bg-gray-400' : ''}`} key={g} onClick={() => handleClick(g)}>
            <div className='mr-4 md:mr-6 uppercase underline'>
              <Link href={`/movies?genre=${g}`}>{g}</Link>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default GenreSelect;
