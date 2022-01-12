import PlayerList from '../PlayerList/PlayerList';
export default function TeamDetail({ team }) {
  return (
    <>
      <h1>Team Detail</h1>
      {team.players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </>
  );
}
