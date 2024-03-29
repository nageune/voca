import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function DayList() {
  const days = useFetch('http://localhost:3001/days');

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <ul className="list_day">
        {days
          .sort((a, b) => a.day - b.day)
          .map((day) => (
            <li key={day.id}>
              <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default DayList;
