import { useState, useEffect } from 'react';
import { fetchTeams } from '../../services/teams';
import Team from '../../Components/Team/Team';
import { Link } from 'react-router-dom';

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
        <Link key={team.id} to={`/team-detail/${team.id}`}>
          <Team {...team} />
        </Link>
      ))}
    </div>
  );
}
