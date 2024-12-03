import React from 'react'
import { useRef } from 'react';
import { collection,updateDoc } from 'firebase/firestore';
import { arrayUnion } from 'firebase/firestore/lite';
import { db } from '../../firestoreInitialize';
function ImageForm({inAlbum}){
    const imageUrl = useRef();
    const imageCaption = useRef();
    async function uploadImange(){
        const image = imageUrl.current.value;
        const caption = imageCaption.current.value;
        try{
            const albumRef = collection(db, 'albums').doc(inAlbum.id); 
            await updateDoc(albumRef,{
                images: arrayUnion({ url: image, caption: caption })
            })
            handleClear();
        }catch(err){
            console.error("Error adding image: ", err);
        }
    }
    const handleClear = () =>{
        imageUrl.current.value = '';
        imageCaption.current.value='';
      }
    return(
        <>
            <div className='container my-3'>
                <h1>Add Images to {inAlbum.albumName}</h1>
                <form>
                    <div className="mb-3">
                        <input type="url" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Image URL' ref={imageUrl}/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder='Add Caption' ref={imageCaption}/>
                    </div>
                    <button className="btn btn-outline-warning m-2" type="button" >clear</button>
                    <button className="btn btn-outline-primary m-2" type="submit" onClick={uploadImange}>Create</button>
                </form>
            </div>
        </>
    )
}

export default ImageForm;
