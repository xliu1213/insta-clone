import { Text, VStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Box } from "@chakra-ui/react";
import ShowFollowing from './ShowFollowing'; 
import useGetUserFollowing from "../../hooks/useGetUserFollowing";

const ShowFollowings = ({ isOpen, onClose }) => {
  const {isLoading, userFollowings} = useGetUserFollowing();
  if (isLoading) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box w={"full"} textAlign={"center"} mb={4}>
            <Text fontSize={"xl"} fontWeight={"bold"}>Followings</Text>
          </Box>
          <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"} spacing={4}>
            {userFollowings.map(user => (
              <ShowFollowing following={user} key={user.id} />
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShowFollowings;