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
  console.log(teams);
  return <div>teams</div>;
}
