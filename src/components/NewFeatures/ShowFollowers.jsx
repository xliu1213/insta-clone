import { Text, VStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Box } from "@chakra-ui/react";
import ShowFollower from './ShowFollower'; 
import useAuthStore from "../../store/authStore";
import useGetUserFollowers from "../../hooks/useGetUserFollowers";

const ShowFollowers = ({ isOpen, onClose }) => {
  const authUser = useAuthStore((state) => state.user)
  const {isLoading, userFollowers} = useGetUserFollowers()
  if (isLoading) return null

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
            {userFollowers.map(user => (
              <ShowFollower follower={user} key={user.id} />
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShowFollowers;