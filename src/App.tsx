import {Grid, GridItem, Show} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GamesGrid from "./components/GamesGrid"
import GenreList from "./components/GenreList"
import {useState} from "react"
import {Genre} from "./hooks/useGenres"

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
          <GenreList onSelectGenre={genre => setSelectedGenre(genre)} />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GamesGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
