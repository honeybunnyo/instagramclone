import React from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import { PostFooter } from "./PostFooter";

export const FeedPost = ({img, username, avatar}) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box my={2} borderRadius={3} overflow={"hidden"}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} />
    </>
  );
};
