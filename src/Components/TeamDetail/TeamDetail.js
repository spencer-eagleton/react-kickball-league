import { Link } from 'react-router-dom';
export default function TeamDetail({ id, team, name }) {
  return (
    <>
      <h1>Team Detail</h1>
      <Link to={`./teams/${id}`} key={team}>
        {name}
      </Link>
    </>
  );
}
