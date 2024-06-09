import { Avatar, Button, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import useAuthStore from '../../store/authStore'
import useLogout from '../../hooks/useLogout'

const SuggestedHeader = () => {
  const authUser = useAuthStore(state => state.user)
  const {handleLogout, isLoggingOut} = useLogout()

  if (!authUser) return null

  return <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
    <Flex alignItems={"center"} gap={2}>
      <Link to={`${authUser.username}`}>
        <Avatar size={"lg"} src={authUser.profilePicURL} />
      </Link>
      <Link to={`${authUser.username}`}>
        <Text fontSize={12} fontWeight={"bold"}>{authUser.username}</Text>
      </Link>
    </Flex>
    <Button fontSize={14} fontWeight={"medium"} color={"blue.400"} cursor={"pointer"} onClick={handleLogout} 
      isLoading={isLoggingOut} background={"transparent"} _hover={{background: "transparent"}} size={"xs"}>
        Log out
    </Button>
  </Flex>
}

export default SuggestedHeader