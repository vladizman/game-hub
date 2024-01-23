import useGames from "../hooks/useGames"
import {SimpleGrid, Text} from "@chakra-ui/react"
import CardGame from "./CardGame"
import CardGameSkeleton from "./CardGameSkeleton"
import GameCardContainer from "./GameCardContainer"
import {Genre} from "../hooks/useGenres"
import {Platform} from "../hooks/useGames"
import {GameQuery} from "../App"

interface Props {
  gameQuery: GameQuery
}

const GamesGrid = ({gameQuery}: Props) => {
  const {error, data, isLoading} = useGames(gameQuery)
  const skeletons = [1, 2, 3, 4, 5, 6]
  if (error) return <Text>{error}</Text>
  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={5}>
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
  )
}

export default GamesGrid
