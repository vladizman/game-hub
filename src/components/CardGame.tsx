import React from "react"
import {Game} from "../hooks/useGames"
import {Card, CardBody, Heading, Image, Text} from "@chakra-ui/react"
import CardIconList from "./CardIconList"

interface Props {
  game: Game
}

const CardGame = ({game}: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <CardIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  )
}

export default CardGame
