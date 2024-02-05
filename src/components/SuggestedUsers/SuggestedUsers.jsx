import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { SuggestedHeader } from "./SuggestedHeader";
import { SuggestedUser } from "./SuggestedUser";
import { Link } from "react-router-dom";

export const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4} alignItems={"flex-start"}>
      <SuggestedHeader />
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={"full"}
        fontSize={14}
      >
        <Text color={"gray"} fontWeight={"medium"}>
          Suggested for you
        </Text>

        <Text
          fontSize={12}
          _hover={{ color: "gray" }}
          fontWeight={"medium"}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser />
      <SuggestedUser />
      <SuggestedUser />

      <Box fontSize={12} color={"gray"}>
        2024 Built by {""}
        <Link href="https://github.com/honeybunnyo" target="_blank" color="blue.500" fontSize={14}>
          honeybunnyo
        </Link>
      </Box>
    </VStack>
  );
};
