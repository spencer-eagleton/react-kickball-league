import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamsById } from '../../services/teams';
import TeamDetail from '../../Components/TeamDetail/TeamDetail';
export default function TeamDetail(props) {
  const [team, setTeam] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamsById(id);
      setTeam(data);
    };
    fetchData();
  }, [id]);

  return <TeamDetail {...team} />;
}
