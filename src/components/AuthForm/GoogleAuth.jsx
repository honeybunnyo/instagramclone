import { Flex, Image, Text } from "@chakra-ui/react";
const GoogleAuth = () => {
  return (
    <>
    
        {/* Log in with Google */}
        <Flex
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        >
        <Image src="/google.png" w={5} alt="Google Logo" />
        <Text mx="2" color={"blue.500"}>
            Log in with Google
        </Text>
        </Flex>
        
    </>
  )
}

export default GoogleAuth