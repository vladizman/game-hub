import useGames from "../hooks/useGames"
import {SimpleGrid, Text} from "@chakra-ui/react"
import CardGame from "./CardGame"
import CardGameSkeleton from "./CardGameSkeleton"

const GamesGrid = () => {
  const {error, games, isLoading} = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 5}}
        padding={10}
        spacing={10}
      >
        {isLoading &&
          skeletons.map(skeleton => (
            <CardGameSkeleton key={skeleton}></CardGameSkeleton>
          ))}
        {games.map(game => (
          <CardGame key={game.id} game={game}></CardGame>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GamesGrid
