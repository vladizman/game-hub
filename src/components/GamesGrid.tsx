import useGames from "../hooks/useGames"
import {SimpleGrid, Text} from "@chakra-ui/react"
import CardGame from "./CardGame"
import CardGameSkeleton from "./CardGameSkeleton"
import GameCardContainer from "./GameCardContainer"
import {Genre} from "../hooks/useGenres"

interface Props {
  selectedGenre: Genre | null
}

const GamesGrid = ({selectedGenre}: Props) => {
  const {error, data, isLoading} = useGames(selectedGenre)
  const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{sm: 1, md: 2, lg: 3, xl: 5}}
        padding={10}
        spacing={3}
      >
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer key={skeleton}>
              <CardGameSkeleton />
            </GameCardContainer>
          ))}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <CardGame game={game}></CardGame>{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GamesGrid
