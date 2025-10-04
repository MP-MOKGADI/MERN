

import { useState } from "react";
import axios from "axios";

export default function PhotoUploader({ addedPhotos, onChange }) {
  const [photoLink, setPhotoLink] = useState("");

  
  async function addPhotoByLink(ev) {
    ev.preventDefault();
    if (!photoLink) return;

    try {
      const { data: filenames } = await axios.post(
        "http://localhost:3000/upload-by-link",
        { link: photoLink }
      );

      const newFiles = Array.isArray(filenames) ? filenames : [filenames];
    
      const uniqueFiles = Array.from(new Set([...addedPhotos, ...newFiles]));
      onChange(uniqueFiles);
      setPhotoLink("");
    } catch (err) {
      console.error("Upload by link failed:", err);
      alert(" Failed to upload photo. Please try again.");
    }
  }

  
  async function uploadPhoto(ev) {
    const files = ev.target.files;
    if (!files || files.length === 0) return;

    const data = new FormData();
    for (let file of files) data.append("photos", file);

    try {
      const { data: filenames } = await axios.post(
        "http://localhost:3000/upload",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      
      const uniqueFiles = Array.from(new Set([...addedPhotos, ...filenames]));
      onChange(uniqueFiles);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Failed to upload photo. Please try again.");
    }
  }

  
  function removePhoto(link) {
    onChange(addedPhotos.filter((photo) => photo !== link));
  }
  
  function selectAsMainPhoto(ev, filename) {
  ev.preventDefault();
  onChange([
    filename,
    ...addedPhotos.filter(photo => photo !== filename),
  ]);
}

  return (
    <div>
      
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Add using a link....jpg"
          className="w-full border p-2 rounded-md"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
        />
        <button
          type="button"
          className="bg-gray-200 px-4 py-2 rounded-md ml-2"
          onClick={addPhotoByLink}
        >
          Add photo
        </button>
      </div>

      {/* Uploaded images grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-2">
        {addedPhotos.map((link) => (
          <div className="h-32 relative group" key={link}>
            <img
              src={`http://localhost:3000/uploads/${link}`}
              alt="photo"
              className="h-32 w-full object-cover rounded-lg"
              onError={(e) => (e.target.src = "/placeholder.png")}
            />
            {/* Delete button on hover */}
            <button
              type="button"
              onClick={() => removePhoto(link)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
            >
              ✕
            </button>
            {/* Main photo button */}
            <button
  type="button"
  onClick={() => selectAsMainPhoto(link)}
  className="absolute bottom-1 right-1 bg-yellow-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
>
  {link === addedPhotos[0] ? (
    // Main photo star (outline)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 
           5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 
           3.602a.563.563 0 0 0-.182.557l1.285 
           5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 
           0 0 0-.586 0L6.982 20.54a.562.562 
           0 0 1-.84-.61l1.285-5.386a.562.562 
           0 0 0-.182-.557l-4.204-3.602a.562.562 
           0 0 1 .321-.988l5.518-.442a.563.563 
           0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  ) : (
    // Not main photo star (filled)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 
           2.424 0l2.082 5.006 5.404.434c1.164.093 
           1.636 1.545.749 2.305l-4.117 
           3.527 1.257 5.273c.271 
           1.136-.964 2.033-1.96 
           1.425L12 18.354 7.373 
           21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 
           2.082-5.005Z"
      />
    </svg>
  )}
</button>

          </div>
        ))}

        {/* File upload */}
        <label className="h-32 flex justify-center items-center cursor-pointer border rounded-2xl text-gray-600 hover:bg-gray-200">
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
          upload
        </label>
      </div>
    </div>
  );
}
