import { checkError, client } from './client';

export async function fetchPlayers() {
  const resp = await client.from('players').select().order('name');
  return checkError(resp);
}

export async function fetchPlayersByTeam(id) {
  const resp = await client.from('players').select('*').eq('team_id', id);
  return checkError(resp);
}
