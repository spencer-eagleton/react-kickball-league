import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamDetail from '../TeamDetail/TeamDetail';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();

      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <TeamDetail key={team.id} {...team} />
      ))}
    </div>
  );
}
