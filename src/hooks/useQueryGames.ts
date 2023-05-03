import { QueryHookOptions, useQuery } from '@apollo/client'
import { GetGames, GetGamesVariables } from 'graphql/generated/GetGames'
import { GET_GAMES } from 'graphql/queries/games'

export function useQueryGames(
  options?: QueryHookOptions<GetGames, GetGamesVariables>
) {
  return useQuery<GetGames, GetGamesVariables>(GET_GAMES, options)
}
