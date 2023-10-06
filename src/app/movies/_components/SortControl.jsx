'use client';

import Link from 'next/link';

export default function SortControl({searchParams}) {
  const { genre, query } = searchParams;

  let href = '/movies'
  if (genre) {
    href += `?genre=${genre}`
  }

  if (query) {
    href += `&query=${query}`
  }

  return (
    <>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">sort by</summary>
        <ul data-testid='sort-by-list' className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {
            [{name: 'Release Date', value: 'release_date'}, {name: 'Title', value: 'title'}]
              .map(sortBy => 
                <li key={sortBy.value}>
                  <Link href={`${href}&sortBy=${sortBy.value}`}>
                    {sortBy.name}
                  </Link>
                </li>
              )
          }
        </ul>
      </details>
    </>
  );
}
