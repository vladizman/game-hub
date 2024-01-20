import useGames from "../hooks/useGames"
import {SimpleGrid, Text} from "@chakra-ui/react"
import CardGame from "./CardGame"

const GamesGrid = () => {
  const {error, games} = useGames()
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 5}}
        padding={10}
        spacing={10}
      >
        {games.map(game => (
          <CardGame key={game.id} game={game}></CardGame>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GamesGrid
