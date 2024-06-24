import { 
  Flex, 
  Tooltip, 
  Box, 
  useDisclosure, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody, 
  FormControl, 
  FormLabel, 
  Input, 
  Button 
} from "@chakra-ui/react"
import { SearchLogo } from "../../assets/constants"
import useSearchUser from '../../hooks/useSearchUser'

const Search = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {user, isLoading, getUserProfile} = useSearchUser()
  const handleSearchUser = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Tooltip hasArrow label={"Search"} placement="right" ml={1} openDelay={500} display={{base:"block", md:"none"}}>
        <Flex alignItems={"center"} gap={4} _hover={{bg:"whiteAlpha.400"}} borderRadius={6} p={2} w={{base:10, md:"full"}} 
          justifyContent={{base:"center", md:"flex-start"}} onClick={onOpen}>
            <SearchLogo />
            <Box display={{base:"none", md:"block"}}>Search</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="asaprogrammer" ref={searchRef} />
              </FormControl>
              <Flex w={"full"} justifyContent={"flex-end"}>
                <Button type="submit" ml={"auto"} size={"sm"} my={4} isLoading={isLoading}>Search</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Search