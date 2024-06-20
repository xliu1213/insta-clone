import { useEffect, useState } from "react"
import useAuthStore from '../store/authStore'
import useUserProfileStore from "../store/userProfileStore"
import useShowToast from '../hooks/useShowToast'

const useFollowUser = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false)
  const [isFollowing, setIsFollowing] = useState(false)
  const {user, setUser} = useAuthStore()
  const {userProfile, setUserProfile} = useUserProfileStore()
  const showToast = useShowToast()

  const handleFollowUser = async () => {}

  useEffect(() => {
    if (user) {
      const isFollowing = user.following.includes(userId)
      setIsFollowing(isFollowing)
    }
  }, [user, userId])

  return {isUpdating, isFollowing, handleFollowUser}
}

export default useFollowUser