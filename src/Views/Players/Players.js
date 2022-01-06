import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import { Link } from 'react-router-dom';

export default function Players() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <Link key={player.id}>{player.name}</Link>
      ))}
    </div>
  );
}
