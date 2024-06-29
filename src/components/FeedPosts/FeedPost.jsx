import { Box, Image } from "@chakra-ui/react"
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"

const FeedPost = ({post}) => {
  return <>
    {/* <PostHeader username={username} avatar={avatar}/> */}
    <Box borderRadius={4} overflow={"hidden"}>
      <Image src={post.imageURL} alt="Feed post img" />
    </Box>
    {/* <PostFooter username={username}/> */}
  </>
}

export default FeedPost