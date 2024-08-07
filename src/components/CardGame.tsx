import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import CardIconList from "./CardIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-crop";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const CardGame = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <CardIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <Heading fontSize="2xl">
            {game.name} <Emoji rating={game.rating_top} />{" "}
          </Heading>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default CardGame;
