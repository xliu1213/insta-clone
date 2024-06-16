import { useState } from "react"
import useAuthStore from "../store/authStore"
import useShowToast from "./useShowToast"

const useEditProfile = () => {
  const [isUpdating, setIsUpdating] = useState(false)
  const authUser = useAuthStore((state) => state.user)
  const showToast = useShowToast()

  const editProfile = async (inputs, selectedFile) => {
    if (isUpdating || !authUser) return 
    setIsUpdating(true)
  }
}

export default useEditProfile