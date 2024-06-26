import { useEffect, useState } from "react"
import usePostStore from '../store/postStore'
import useShowToast from './useShowToast'
import { collection, query, where } from "firebase/firestore"
import { firestore } from "../firebase/firebase"

const useGetUserPosts = () => {
  const [isLoading, setIsLoading] = useState(true)
  const {posts, setPosts} = usePostStore()
  const showToast = useShowToast()
  const userProfile = useUserProfileStore(state => state.userProfile)

  useEffect(() => {
    const getPosts = async () => {
      if (!userProfile) return 
      setIsLoading(true)
      setPosts([])
      try {
        const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid))
      } catch (error) {
        showToast("Error", error.message, "error")
        setPosts([])
      } finally {
        setIsLoading(false)
      }
    }
  }, [])
}

export default useGetUserPosts