import { Link } from 'react-router-dom';
import PlayerList from '../PlayerList/PlayerList';
export default function TeamDetail({ team }) {
  console.log(team);
  return (
    <>
      <h1>Team Detail</h1>
      {team.players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </>
  );
}
