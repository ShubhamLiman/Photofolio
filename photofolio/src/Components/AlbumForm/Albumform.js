import React from 'react'
import { useRef } from 'react';
import { collection,addDoc } from 'firebase/firestore';
import { db } from '../../firestoreInitialize';
function Albumform({Albums,setAlbums}) {
  const albumNameRef = useRef();

  const handleCreateClick = async(e) => {
    e.preventDefault();
    const albumName = albumNameRef.current.value;
    const docRef  = await addDoc(collection(db,"albums"),{
      albumName: albumName,
      images:[],
      createdon:new Date()
    })
    console.log("Document written with ID: ", docRef.id);
    albumNameRef.current.value = '';
  };

  const handleClear = () =>{
    albumNameRef.current.value = '';
  }
  return (
    <>
      <div className='container my-3'>
        <h2>Create Album</h2>
        <div className="input-group my-2">
          <input 
            type="text" 
            className="form-control my-2" 
            placeholder="Album Name" 
            aria-label="Recipient's username with two button addons"
            ref={albumNameRef}
          />
          <button className="btn btn-outline-warning my-2" type="button" onClick={handleClear}>clear</button>
          <button className="btn btn-outline-primary my-2" type="submit" onClick={handleCreateClick}>Create</button>
        </div>
      </div>
    </>
  )
}

export default Albumform
