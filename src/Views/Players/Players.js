import { useState, useEffect } from 'react';
import { fetchPlayers, fetchPlayersByTeam } from '../../services/players';
import PlayerList from '../../Components/PlayerList/PlayerList';
export default function Players(props) {
  const [players, setPlayers] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await fetchPlayersByTeam(id);
        setPlayers(data);
      } else {
        const data = await fetchPlayers();
        setPlayers(data);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </div>
  );
}
