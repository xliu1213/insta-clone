import { useState } from "react"
import useShowToast from './useShowToast'
import useAuthStore from '../store/authStore'

const usePostComment = () => {
  const [isCommenting, setIsCommenting] = useState(false)
  const showToast = useShowToast()
  const authUser = useAuthStore(state => state.user)

  const handlePostComment = async (postId, comment) => {
    if (isCommenting) return
    if (!authUser) return showToast("Error", "You must be logged in to comment", "error")
    setIsCommenting(true)
    const newComment = {
      comment,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId,
    }
    try {
      
    } catch (error) {
      
    } finally {
      setIsCommenting(false)
    }
  }
}

export default usePostComment