import React from "react"
import useGenres from "../hooks/useGenres"
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react"
import getCroppedImageUrl from "../services/image-crop"

import {Genre} from "../hooks/useGenres"

interface Props {
  onSelectGenre: (genre: Genre) => void
}

const GenreList = ({onSelectGenre}: Props) => {
  const {data, isLoading, error} = useGenres()

  if (error) return null
  if (isLoading) return <Spinner></Spinner>
  return (
    <div>
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                variant="link"
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default GenreList
