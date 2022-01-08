import PlayerList from '../PlayerList/PlayerList';
export default function TeamDetail({ team }) {
  return (
    <>
      <p key={team.id}>
        <h1>{team.name}</h1>
        <h3>{team.city}</h3>
      </p>
      <h4>Roster:</h4>
      {team.players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </>
  );
}
