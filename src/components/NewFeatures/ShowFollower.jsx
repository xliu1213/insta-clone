import { Avatar, Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ShowFollower = ({follower}) => {
  return <Flex alignItems={"center"} w={"full"} gap={3}>
    <Link to={`/${follower.username}`}>
      <Avatar src={follower.profilePicURL} size={"md"}/>
    </Link>
    <Link to={`/${follower.username}`}>
      <Box fontSize={12} fontWeight={"bold"}>{follower.fullName}</Box>
    </Link>
  </Flex>
}

export default ShowFollower