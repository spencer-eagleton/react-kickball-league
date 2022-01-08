export default function PlayerDetail({ player }) {
  return (
    <>
      <h1>Player Detail</h1>
      <p key={player.id}>{player.name}</p>
      <p>{player.position}</p>
    </>
  );
}
