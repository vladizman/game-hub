import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import axios from "axios";

interface Props {
  gameId: number;
}

const LikeGame = ({ gameId }: Props) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = async () => {
    setLiked(!liked);

    try {
      await axios.post("http://127.0.0.1:8000/api/tolike", { game_id: gameId });
      console.log("Game liked successfully");
    } catch (error) {
      console.error("Error liking the game:", error);
    }
  };

  return (
    <IconButton
      aria-label="Like"
      icon={liked ? <FaHeart /> : <FaRegHeart />}
      colorScheme={liked ? "red" : "gray"}
      onClick={toggleLike}
      variant="outline"
      fontSize="24px"
    />
  );
};

export default LikeGame;
