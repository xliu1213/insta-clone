import { useSignOut } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'
import useShowToast from './useShowToast'

const useLogout = () => {
  const showToast = useShowToast()
  const [signOut, isLoggingOut, error] = useSignOut(auth)

  const handleLogout = async () => {
    try {
      await signOut()
      localStorage.removeItem("user-info")
      console.log("logged out")
    } catch (error) {
      showToast("Error", error.message, "error")
    }
  }

  return {handleLogout, isLoggingOut, error}
}

export default useLogout