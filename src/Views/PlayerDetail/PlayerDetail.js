import { Link } from 'react-router-dom';

export default function PlayerDetail({ player, name, id }) {
  return (
    <Link to={`./players/${id}`} key={player}>
      {name}
    </Link>
  );
}
