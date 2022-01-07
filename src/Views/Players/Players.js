import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerDetail from '../PlayerDetail/PlayerDetail';

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
        <PlayerDetail key={player.id} {...player} />
      ))}
    </div>
  );
}
