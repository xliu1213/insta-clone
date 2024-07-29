import { useEffect, useState } from "react"
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'
import { doc, getDoc } from "firebase/firestore"
import { firestore } from '../firebase/firebase'

const useGetUserFollowers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [userFollowers, setUserFollowers] = useState([])
  const authUser = useAuthStore((state) => state.user)
  const showToast = useShowToast()

  useEffect(() => {
    const getUserFollowers = async () => {
      setIsLoading(true)
      try {
        const userDocRef = doc(firestore, "users", authUser.uid)
        const userDoc = await getDoc(userDocRef)
        const followers = userDoc.data().followers || []
        const followersData = await Promise.all(
          followers.map(async (followerId) => {
            const followerDocRef = doc(firestore, "users", followerId)
            const followerDoc = await getDoc(followerDocRef)
            return { ...followerDoc.data(), id: followerDoc.id }
          })
        )
        setUserFollowers(followersData)
      } catch (error) {
        showToast("Error", error.message, "error")
      } finally {
        setIsLoading(false)
      }
    }
    getUserFollowers()
  }, [authUser, showToast])

  return { isLoading, userFollowers }
}

export default useGetUserFollowers