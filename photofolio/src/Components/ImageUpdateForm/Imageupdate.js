import React from 'react'
import { useRef } from 'react'
import { db } from '../../firestoreInitialize';
import { doc,updateDoc } from 'firebase/firestore';
function Imageupdate({image,index,album,setInAlbum,onClose}) {
    let imageUrl = useRef();
    let imageCaption = useRef();
    
    console.log(index,album);
    


    async function handleUpdate(e){
      e.preventDefault();

      const newImageUrl = imageUrl.current.value;
      const newImageCaption = imageCaption.current.value;

      alert("Do you want to update this image?")
      const updatedImage = {
        url: newImageUrl,
        caption: newImageCaption
      };
      const updatedImages = [...album.images];
      updatedImages[index] = updatedImage;
      try{
        const albumRef = doc(db, "albums", album.id);
        await updateDoc(albumRef, {
          images: updatedImages
        });

        setInAlbum(prevState => ({
            ...prevState,
            images: updatedImages
        }));

        onClose();
      }catch(err){
        console.error("Error updating document: ", err);
        alert("There was an error updating the image. Please try again.");
      }

    }
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
    <form
      onSubmit={handleUpdate}
      className="p-4 border rounded shadow"
      style={{ maxWidth: "400px", width: "100%" }}
    >
      <h4 className="text-center mb-4">Update Card</h4>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          className="form-control"
          placeholder="Enter image URL"
          ref={imageUrl}
          defaultValue={image.url}
          required
        />
      </div>

      {/* Caption Field */}
      <div className="mb-3">
        <label htmlFor="caption" className="form-label">
          Caption
        </label>
        <input
          type="text"
          id="caption"
          className="form-control"
          placeholder="Enter caption"
          ref={imageCaption}
          defaultValue={image.caption}
          required
        />
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-between">
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={()=>{onClose()}}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
  )
}

export default Imageupdate
