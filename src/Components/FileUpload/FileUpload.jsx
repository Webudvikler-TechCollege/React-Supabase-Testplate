import { FileUploadStyle } from "./FileUpload.style"
import { useSupabase } from "../../Providers/SupabaseProvider"
import { useForm } from "react-hook-form"
import { useState } from "react"

export const FileUpload = () => {
  const [image, setImage] = useState(null)
  const { supabase } = useSupabase()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const storagePath = import.meta.env.VITE_STORAGE_URL

  const submitForm = async (data) => {
    const file = data.image[0] // Access the file object directly
    const fileName = `${Date.now()}_${file.name}` // Generate a unique filename

    try {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        })

      if (error) {
        throw error
      }

      setImage(data.fullPath)
      //console.log(`File uploaded successfully: ${uploadData.Key}`);
    } catch (error) {
      console.error("Error uploading file:", error.message)
    }
  }

  return (
    <FileUploadStyle>
      <form onSubmit={handleSubmit(submitForm)} id="upload-form">
        <label htmlFor="image">Select an image to upload:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", { required: true })}
        />
        {errors.image && <span>This field is required</span>}
        <button type="submit">Upload</button>
      </form>
      {image && <img src={`${storagePath}/${image}`} alt="Uploaded file" />}
    </FileUploadStyle>
  )
}
