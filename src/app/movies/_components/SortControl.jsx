export default function SortControl({sortBy, onSelect}) {
  return (
    <>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">sort by</summary>
        <ul data-testid='sort-by-list' className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {
            ['Release Date', 'Title'].map(sortBy => <li onClick={() => onSelect(sortBy)} key={sortBy}><a>{sortBy}</a></li>)
          }
        </ul>
      </details>
    </>
  );
}
