import { useState } from "react"
import useShowToast from './useShowToast'

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const showToast = useShowToast()
  const maxFileSizeInBytes = 2 * 1024 * 1024 // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0]
  }
}

export default usePreviewImg