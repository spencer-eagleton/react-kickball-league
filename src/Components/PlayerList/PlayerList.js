import { Link } from 'react-router-dom';

export default function PlayerList({ id, name }) {
  return (
    <p>
      <Link to={`/players/${id}`}>{name}</Link>
    </p>
  );
}
