import { useState, useEffect } from 'react';
import { fetchPlayers } from '../../services/players';
import PlayerDetail from '../../Components/PlayerDetail/PlayerDetail';

export default function Players(props) {
  const [players, setPlayers] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {players.map((player) => (
        <PlayerDetail key={player.id} {...player} />
      ))}
    </div>
  );
}
