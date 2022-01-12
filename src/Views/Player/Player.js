import { useState, useEffect } from 'react';
import { fetchPlayersByTeam } from '../../services/players';
import PlayerDetail from '../../Components/PlayerDetail/PlayerDetail';

export default function Team(props) {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayersByTeam(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) return <h1>loading...</h1>;

  return (
    <>
      <PlayerDetail player={player} />
    </>
  );
}
