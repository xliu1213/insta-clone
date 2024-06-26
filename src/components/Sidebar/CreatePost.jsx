import { BsFillImageFill } from "react-icons/bs"
import { CreatePostLogo } from "../../assets/constants"
import { 
  Tooltip, 
  Flex, 
  Box, 
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
  Image,
  CloseButton
} from "@chakra-ui/react"
import { useRef, useState } from "react"
import usePreviewImg from '../../hooks/usePreviewImg'
import useShowToast from "../../hooks/useShowToast"
import useAuthStore from '../../store/authStore'
import usePostStore from "../../store/postStore"
import useUserProfileStore from "../../store/userProfileStore"
import { useLocation } from "react-router-dom"

const CreatePost = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [caption, setCaption] = useState("")
  const imageRef = useRef(null)
  const {handleImageChange, selectedFile, setSelectedFile} = usePreviewImg()

  return (
    <>
      <Tooltip hasArrow label={"Create"} placement="right" ml={1} openDelay={500} display={{base:"block", md:"none"}}>
        <Flex alignItems={"center"} gap={4} _hover={{bg:"whiteAlpha.400"}} borderRadius={6} p={2} w={{base:10, md:"full"}} 
          justifyContent={{base:"center", md:"flex-start"}} onClick={onOpen}>
            <CreatePostLogo />
            <Box display={{base:"none", md:"block"}}>Create</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Textarea placeholder="Post caption..." value={caption} onChange={(e) => setCaption(e.target.value)} />
            <Input type="file" hidden ref={imageRef} onChange={handleImageChange} />
            <BsFillImageFill style={{marginTop:"15px", marginLeft:"5px", cursor:"pointer"}}
              onClick={() => imageRef.current.click()} />
            {selectedFile && (
              <Flex mt={5} w={"full"} position={"relative"} justifyContent={"center"}>
                <Image src={selectedFile} alt="Selected img" />
                <CloseButton position={"absolute"} top={2} right={2} onClick={() => setSelectedFile("")} />
              </Flex>
            )}
          </ModalBody>
          <ModalFooter>
            <Button mr={3}>Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePost

function useCreatePost() {
  const showToast = useShowToast()
  const [isLoading, setIsLoading] = useState(false)
  const authUser = useAuthStore(state => state.user)
  const createPost = usePostStore(state => state.createPost)
  const addPost = useUserProfileStore(state => state.addPost)
  const {pathname} = useLocation()

  const handleCreatePost = async (selectedFile, caption) => {
    if (!selectedFile) throw new Error("Please select an image")
    setIsLoading(true)
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createdBy: authUser.uid,
    }
    try {
      
    } catch (error) {
      showToast("Error", error.message, "error")
    } finally {
      setIsLoading(false)
    }
  }
}