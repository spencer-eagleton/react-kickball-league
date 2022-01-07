import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import TeamList from '../../Components/TeamList/TeamList';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();

      setTeams(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>loading...</h1>;

  return (
    <div>
      <h1>Teams</h1>
      {teams.map((team) => (
        <TeamList key={team.id} {...team} />
      ))}
    </div>
  );
}
