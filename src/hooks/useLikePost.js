import { useState } from "react"
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import { doc } from "firebase/firestore"
import { firestore } from '../firebase/firebase'

const useLikePost = (post) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const authUser = useAuthStore(state => state.user)
  const [likes, setLikes] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid))
  const showToast = useShowToast()

  const handleLikePost = async () => {
    if (isUpdating) return
    if (!authUser) return showToast("Error", "You must be logged in to like a post", "error")
    setIsUpdating(true)
    try {
      const postRef = doc(firestore, "posts", post.id)
    } catch (error) {
      showToast("Error", error.message, "error")
    } finally {
      setIsUpdating(false)
    }
  }
}

export default useLikePost