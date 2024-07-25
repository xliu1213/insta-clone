import {
  Avatar,
  Flex,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Box,
} from "@chakra-ui/react"

const dummyFollowers = [
  { id: 1, username: 'john_doe', profilePicURL: 'https://via.placeholder.com/150' },
  { id: 2, username: 'jane_doe', profilePicURL: 'https://via.placeholder.com/150' },
  { id: 3, username: 'user123', profilePicURL: 'https://via.placeholder.com/150' },
];

const ShowFollowers = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box w={"full"} textAlign={"center"} mb={4}>
            <Text fontSize={"xl"} fontWeight={"bold"}>Followers</Text>
          </Box>
          <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"} spacing={4}>
            {dummyFollowers.map((follower) => (
              <Flex key={follower.id} alignItems={"center"} w={"full"} p={2} borderRadius={4} _hover={{ bg: "whiteAlpha.200" }}>
                <Avatar src={follower.profilePicURL} size={"sm"} name={follower.username} />
                <Text fontWeight={"bold"} ml={4}>{follower.username}</Text>
              </Flex>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ShowFollowers