import useGames from "../hooks/useGames"
import {SimpleGrid, Text} from "@chakra-ui/react"
import CardGame from "./CardGame"
import CardGameSkeleton from "./CardGameSkeleton"
import GameCardContainer from "./GameCardContainer"

const GamesGrid = () => {
  const {error, data, isLoading} = useGames()
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
            <GameCardContainer>
              <CardGameSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map(game => (
          <GameCardContainer>
            <CardGame key={game.id} game={game}></CardGame>{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GamesGrid
