import { Box, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { SuggestedHeader } from "./SuggestedHeader";
import { SuggestedUser } from "./SuggestedUser";

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
      <SuggestedUser name='Jason A' followers={132} avatar='https://bit.ly/dan-abramov'/>
      <SuggestedUser name='Ryan Florence' followers={536} avatar='https://bit.ly/ryan-florence'/>
      <SuggestedUser name='Christian' followers={43} avatar='https://bit.ly/code-beast'/>

      <Box fontSize={12} color={"gray"} mt={5}>
        2024 Built by {""}
        <Link href="https://github.com/honeybunnyo" target="_blank" color="blue.500" fontSize={12}>
           @honeybunnyo
        </Link>
      </Box>
    </VStack>
  );
};
