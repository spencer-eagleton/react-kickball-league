import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';

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
        <h3 key={team.name}>{team.name}</h3>
      ))}
    </div>
  );
}
