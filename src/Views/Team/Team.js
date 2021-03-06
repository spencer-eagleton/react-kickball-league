import { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/teams';
import PlayerList from '../../Components/PlayerList/PlayerList';
export default function Team(props) {
  const [team, setTeam] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(id);
      setTeam(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {team.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </div>
  );
}
