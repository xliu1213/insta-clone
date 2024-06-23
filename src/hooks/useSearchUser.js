import { useState } from "react"
import useShowToast from "./useShowToast"

const useSearchUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState(null)
  const showToast = useShowToast()

  const getUserProfile = async (username) => {
    try {
      
    } catch (error) {
      showToast("Error", error.message, "error")
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }
}

export default useSearchUser