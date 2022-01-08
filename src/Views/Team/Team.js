import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/teams';
import TeamDetail from '../../Components/TeamDetail/TeamDetail';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) return <h1>loading...</h1>;

  return <TeamDetail team={team} />;
}
