import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {
  return <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column", sm:"row"}}>
    <AvatarGroup size={{base:"xl",md:"2xl"}} mx={"auto"}>
      <Avatar name="Default profile pic" src="/profilepic.png" alt="Default profile picture logo"/>
    </AvatarGroup>
    <VStack alignItems={"start"} flex={1}>
      <Flex gap={4} direction={{base:"column", sm:"row"}} alignItems={"center"} w={"full"}>
          <Text fontSize={{base:"sm",md:"lg"}}>xiyuan</Text>
          <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}}>
            Edit Profile
          </Button>
      </Flex>
      <Flex gap={{base:2, sm:4}} fontSize={{base:"xs", md:"sm"}}>
        <Text><Text as={"span"} fontWeight={"bold"} mr={1}>4</Text> Posts</Text>
        <Text><Text as={"span"} fontWeight={"bold"} mr={1}>149</Text> Followers</Text>
        <Text><Text as={"span"} fontWeight={"bold"} mr={1}>175</Text> Following</Text>
      </Flex>
      <Text fontSize={"sm"} fontWeight={"bold"}>Xiyuan</Text>
      <Text fontSize={"sm"}>Created an insta-clone using React and Vite.</Text>
    </VStack>
  </Flex>
}

export default ProfileHeader
