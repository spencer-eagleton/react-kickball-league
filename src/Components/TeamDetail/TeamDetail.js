import PlayerList from '../PlayerList/PlayerList';
export default function TeamDetail({ team }) {
  return (
    <>
      <p key={team.id}></p>
      <h1>{team.name}</h1>
      <h3>{team.city}</h3>

      <h4>Roster:</h4>
      {team.players.map((player) => (
        <PlayerList key={player.id} {...player} />
      ))}
    </>
  );
}
