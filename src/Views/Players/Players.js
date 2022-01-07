import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerList from '../../Components/PlayerList/PlayerList';
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
        <PlayerList key={player.id} {...player} />
      ))}
    </div>
  );
}
