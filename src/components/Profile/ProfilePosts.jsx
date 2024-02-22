import { Grid, Skeleton, Box, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"}>
            <Skeleton w={"full"}>
              <Box height="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost img="/img1.png" username="jennifersmith" avatar="/img1.png" />
          <ProfilePost img="/img2.png" username="johnsmith" avatar="/img2.png" />
          <ProfilePost img="/img3.png" username="jessicasmith" avatar="/img3.png" />
          <ProfilePost img="/img4.png" username="jasonsmith" avatar="/img4.png" />
        </>)
      }

    </Grid>
  );
};

export default ProfilePosts;
