import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from "@chakra-ui/react"
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from '../../store/authStore'
import EditProfile from "./EditProfile"
import useFollowUser from "../../hooks/useFollowUser"

const ProfileHeader = () => {
  const {userProfile} = useUserProfileStore()
  const authUser = useAuthStore(state => state.user)
  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(userProfile?.uid)

  return <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column", sm:"row"}}>
    <AvatarGroup size={{base:"xl",md:"2xl"}} mx={"auto"}>
      <Avatar src={userProfile.profilePicURL} alt="Default profile picture logo"/>
    </AvatarGroup>
    <VStack alignItems={"start"} flex={1}>
      <Flex gap={4} direction={{base:"column", sm:"row"}} alignItems={"center"} w={"full"}>
          <Text fontSize={{base:"sm",md:"lg"}}>{userProfile.username}</Text>
          {visitingOwnProfileAndAuth && (
            <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:"xs",md:"sm"}} onClick={onOpen}>
              Edit Profile
            </Button>
          )}
          {visitingAnotherProfileAndAuth && (
            <Button bg={"blue.500"} color={"white"} _hover={{bg:"blue.600"}} size={{base:"xs",md:"sm"}}
              onClick={handleFollowUser} isLoading={isUpdating}>
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
          )}
      </Flex>
      <Flex gap={{base:2, sm:4}} fontSize={{base:"xs", md:"sm"}}>
        <Text><Text as={"span"} fontWeight={"bold"} mr={1}>{userProfile.posts.length}</Text> Posts</Text>
        <Text><Text as={"span"} fontWeight={"bold"} mr={1}>{userProfile.followers.length}</Text> Followers</Text>
        <Text><Text as={"span"} fontWeight={"bold"} mr={1}>{userProfile.following.length}</Text> Following</Text>
      </Flex>
      <Text fontSize={"sm"} fontWeight={"bold"}>{userProfile.fullName}</Text>
      <Text fontSize={"sm"}>{userProfile.bio}</Text>
    </VStack>
    {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
  </Flex>
}

export default ProfileHeader