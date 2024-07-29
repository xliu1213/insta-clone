import { useEffect, useState } from "react";
import useAuthStore from '../store/authStore';
import useShowToast from './useShowToast';
import { doc, getDoc } from "firebase/firestore";
import { firestore } from '../firebase/firebase';

const useGetUserFollowings = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userFollowings, setUserFollowings] = useState([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();

  useEffect(() => {
    const getUserFollowings = async () => {
      setIsLoading(true);
      try {
        const userDocRef = doc(firestore, "users", authUser.uid);
        const userDoc = await getDoc(userDocRef);
        const followings = userDoc.data().following || [];
        const followingsData = await Promise.all(
          followings.map(async (followingId) => {
            const followingDocRef = doc(firestore, "users", followingId);
            const followingDoc = await getDoc(followingDocRef);
            return { ...followingDoc.data(), id: followingDoc.id };
          })
        );
        setUserFollowings(followingsData);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserFollowings();
  }, [authUser, showToast]);

  return { isLoading, userFollowings };
}

export default useGetUserFollowings;