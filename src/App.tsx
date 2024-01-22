import {Grid, GridItem, HStack, Show} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GamesGrid from "./components/GamesGrid"
import GenreList from "./components/GenreList"
import {useState} from "react"
import {Genre} from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import {Platform} from "./hooks/useGames"
import SortSelector from "./components/SortSelector"

export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
  sortOrder: string
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav  " "  main"`, //for phone
        lg: `"nav nav" "aside main"`, //1024 px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={genre => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack paddingLeft={9} spacing={5} marginBottom={2}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={platform =>
              setGameQuery({...gameQuery, platform})
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={sortOrder =>
              setGameQuery({...gameQuery, sortOrder})
            }
          />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
