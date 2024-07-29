import { Avatar, Box, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ShowFollowing = ({ following }) => {
  return (
    <Flex alignItems={"center"} w={"full"} gap={3}>
      <Link to={`/${following.username}`}>
        <Avatar src={following.profilePicURL} size={"md"} />
      </Link>
      <Link to={`/${following.username}`}>
        <Box fontSize={12} fontWeight={"bold"}>{following.fullName}</Box>
      </Link>
    </Flex>
  )
}

export default ShowFollowing