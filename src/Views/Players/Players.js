import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';

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
        <h1 key={player.id}>{player.name}</h1>
      ))}
    </div>
  );
}
