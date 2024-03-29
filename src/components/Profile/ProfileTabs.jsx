import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import {BsBookmark, BsGrid3X3} from "react-icons/bs";
import { MdOutlinePortrait } from "react-icons/md";


const ProfileTabs = () => {
  return <Flex w={"full"}
  justifyContent={"center"}
  gap={{base:4, sm:10}}
  textTransform={"uppercase"}
  fontWeight={"bold"}
  >

    <Flex borderTop={"1px solid white"} alignItems={"center"} p="3" gap={1} cursor={"pointer"} >
      <Box fontSize={20}>
        <BsGrid3X3/>
      </Box>
      <Text fontSize={12} display={{base:"none", sm:"block"}} mt={2} > POSTS</Text>
    </Flex>

    <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
      <Box fontSize={20}>
        <BsBookmark/>
      </Box>
      <Text fontSize={12} display={{base:"none", sm:"block"}} mt={2}> SAVED</Text>
    </Flex>

    <Flex alignItems={"center"} p="3" gap={1} cursor={"pointer"}>
      <Box fontSize={20} mr={1}>
        <MdOutlinePortrait/>
      </Box>
      <Text fontSize={12} display={{base:"none", sm:"block"}}> TAGGED</Text>
    </Flex>

  </Flex>;
};

export default ProfileTabs;
