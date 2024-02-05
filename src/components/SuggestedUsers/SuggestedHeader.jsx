import { Avatar, Text, Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";

export const SuggestedHeader = () => {
  return (
    // Profile Pic, username/bio || logout
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="John Smith" size={"md"} src="profilepic.png" />
        <Text fontSize={12} fontWeight={"bold"}>
          johnsmith
          {/* TODO: Name */}
        </Text>
      </Flex>
      
      {/* Log out button */}
      <Link
      as={RouterLink}
      to={"/auth"}
      fontSize={14}
      fontWeight={"medium"}
      color={"blue.400"}
      style={{textDecoration:"none"}}
      _hover={{
        color: "blue.800",
      }}
      cursor={"pointer"}
      >Log out</Link>
    </Flex>
  );
};
