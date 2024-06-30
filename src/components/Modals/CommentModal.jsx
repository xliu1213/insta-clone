import { Button, Flex, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"

const CommentModal = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalHeader>Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form style={{marginTop:"2rem"}}>
            <Input placeholder="Comment" size={"sm"} />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button type="submit" ml={"auto"} size={"sm"} my={4}>Post</Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CommentModal