import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
  useSafeLayoutEffect,
  useStatStyles,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FeedPost } from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },[]);
  return (
    <Container maxW="container.sm" py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap="2">
            <SkeletonCircle size={10}/>
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height='10px' w={"150px"}/>
              <Skeleton height='10px' w={"100px"}/>
            </VStack>
          </Flex>

          <Skeleton w={"full"}>
            <Box height='500px'>contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && (
      <>
        <FeedPost img="/img1.png" username="jennifersmith" avatar="/img1.png" />
        <FeedPost img="/img2.png" username="johnsmith" avatar="/img2.png" />
        <FeedPost img="/img3.png" username="jessicasmith" avatar="/img3.png" />
        <FeedPost img="/img4.png" username="jasonsmith" avatar="/img4.png" />
      </>)

      }

    </Container>
  );
};

export default FeedPosts;
