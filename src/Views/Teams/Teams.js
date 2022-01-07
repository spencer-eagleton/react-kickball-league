import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamList from '../../Components/TeamList/TeamList';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();

      await setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <TeamList key={team.id} {...team} />
      ))}
    </div>
  );
}
