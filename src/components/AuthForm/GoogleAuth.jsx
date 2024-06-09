import { Flex, Image, Text } from '@chakra-ui/react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'
import useShowToast from '../../hooks/useShowToast'
import useAuthStore from '../../store/authStore'

const GoogleAuth = ({prefix}) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  const showToast = useShowToast()
  const loginUser = useAuthStore((state) => state.login)

  return <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
    <Image src="/google.png" w={5} alt="Google logo"/>
    <Text mx={2} color={"blue.500"}>{prefix} with Google</Text>
  </Flex>
}

export default GoogleAuth