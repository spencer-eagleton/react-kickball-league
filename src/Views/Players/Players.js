import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import { Link } from 'react-router-dom';
import PlayerList from '../../Components/PlayerList/PlayerList';

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      {players.map((player) => (
        <Link key={player.id} to={`/players/${player.id}`}>
          <PlayerList {...player} />
        </Link>
      ))}
    </div>
  );
}
