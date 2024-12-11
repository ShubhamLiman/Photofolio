import React from 'react'
import "../Imagecontainer/imageContainer.css"
import { db } from '../../firestoreInitialize';
import { doc,updateDoc } from 'firebase/firestore'
import Imageupdate from '../ImageUpdateForm/Imageupdate';
import Imagecarasoul from '../imagesCarasoul/Imagecarasoul';
import { useState } from 'react';
function ImagesContainer({inAlbum,setInAlbum}) {

  const [updateIndex, setUpdateIndex] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [caroseul,setcaraseul] = useState(false);
  
  console.log(inAlbum);
  
  async function handleDeleteImage(index){
    alert("Do you want to delete this image?")
    const updatedImages =inAlbum.images.filter((_, i) => i !== index);
    const albumRef = doc(db, "albums", inAlbum.id);
            await updateDoc(albumRef, {
                images: updatedImages
            });
    setInAlbum(prevState => ({
      ...prevState,
      images: updatedImages
    }));
  }

  async function handleUpdate(index) {
    setUpdateIndex(index);
    setShowUpdateForm(true);
  }

  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
  };

  const showCaroseul = () =>{
    setcaraseul(!caroseul)
  }
  return (
    <>
        
      {caroseul ? (
          <Imagecarasoul showCaroseul={showCaroseul} inAlbum={inAlbum} />
        ):(

            <>
                / {showUpdateForm && (
                  <div>
                    <Imageupdate
                      image={inAlbum.images[updateIndex]}
                      index={updateIndex}
                      album={inAlbum}
                      setInAlbum={setInAlbum}
                      onClose={handleCloseUpdateForm}
                    />
                  </div>
                )
                }
                <div className='Albumscollection'>
                {inAlbum.images.map((a, index) => {
                    return (
                        <div 
                          key={index} 
                          className="card mx-4 my-4 image-card" 
                          style={{ width: "10rem", position: "relative" }}
                          onClick={(e) =>{
                                e.stopPropagation();
                                showCaroseul();
                          }}
                        >
                          <img src={a.url} className="card-img-top" alt={a.caption || "Image"} />
                          <div className="card-body">
                            <p className="card-text">{a.caption || "No caption available"}</p>
                          </div>
                          <div className="button-group">
                            <button 
                              className="btn btn-primary btn-circle"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleUpdate(index)
                              }} 
                              title="Update"
                            >
                              <i className="fa-solid fa-pencil"></i>
                            </button>
                            <button 
                              className="btn btn-danger btn-circle"
                              onClick={(event) => {
                                event.stopPropagation();
                                handleDeleteImage(index)}}
                              title="Delete"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      );
                    }
                  )
                }
                </div>
            </>

        )
      }

    </>
  )
}

export default ImagesContainer


