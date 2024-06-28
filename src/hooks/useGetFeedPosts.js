import { useEffect, useState } from "react"
import usePostStore from '../store/postStore'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import useUserProfileStore from '../store/userProfileStore'

const useGetFeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const {posts, setPosts} = usePostStore()
  const authUser = useAuthStore(state => state.user)
  const showToast = useShowToast()
  const {setUserProfile} = useUserProfileStore()

  useEffect(() => {
    const getFeedPosts = async () => {
      setIsLoading(true)
      if (authUser.following.length === 0) {
        setIsLoading(false)
        setPosts([])
        return
      }
      try {
        
      } catch (error) {
        showToast("Error", error.message, "error")
      } finally {
        setIsLoading(false)
      }
    }
  }, [])
}

export default useGetFeedPosts