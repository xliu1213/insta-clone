import { useEffect, useState } from "react"
import useShowToast from './useShowToast'

const useGetUserProfileByUsername = () => {
  const [isLoading, setIsLoading] = useState(true)
  const showToast = useShowToast()

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true)
      try {
        
      } catch (error) {
        showToast("Error", error.message, "error")
      }
    }
    getUserProfile()
  }, [])
}

export default useGetUserProfileByUsername