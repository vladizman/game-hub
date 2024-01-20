import {Grid, GridItem, Show} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GamesGrid from "./components/GamesGrid"

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav  " "  main"`, //for phone
        lg: `"nav nav" "aside main"`, //1024 px
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>

      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  )
}

export default App
