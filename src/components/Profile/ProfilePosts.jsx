import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return <Grid templateColumns={{sm:"repeat(1, 1fr)", md:"repeat(3, 1fr)"}} gap={1} columnGap={1}>
    {isLoading && [0, 1, 2, 3, 4, 5].map((_, idx) => (
      <VStack key={idx}>
        <Skeleton w={"full"}>
          <Box h={300}>contents wrapped</Box>
        </Skeleton>
      </VStack>
    ))}
  </Grid>
}

export default ProfilePosts
