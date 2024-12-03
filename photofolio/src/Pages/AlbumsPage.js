import React from 'react'
import { useState,useEffect } from 'react'
import Albumform from '../Components/AlbumForm/Albumform'
import Albumcontainer from '../Components/AlbumContainer/Albumcontainer'
import "../Pages/Albumpage.css"
import { db } from '../firestoreInitialize'
import { collection, onSnapshot } from 'firebase/firestore'
function AlbumsPage({inAlbum,setInAlbum}) {
  const [isFormVisible, setisFormVisible] = useState(false)
  const [albums,setAlbums] = useState([]);
    useEffect(() => {
      
        const unsub = onSnapshot(collection(db,"albums"),(snapshot)=>{
          const Albums = snapshot.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data(),
                }
            })
            setAlbums(Albums);
        })
        console.log(unsub);
        
    },[])
    function handleFormVisible(){
      setisFormVisible(!isFormVisible);
  }

  return (
    <>
      {
        isFormVisible && <Albumform Albums={albums} setAlbums={setAlbums}/>
      }
      <div className='Albumsandaddbutton' id='albumButtons'>
            <h2>Your Albums</h2>
            {isFormVisible ? <button type="button" className="btn btn-outline-danger" onClick={()=>{handleFormVisible()}}>Cancel</button> : <button type="button" className="btn btn-outline-primary" onClick={()=>{handleFormVisible()}}>Add Album</button>}
      </div>
      <Albumcontainer isFormVisible={isFormVisible} setisFormVisible={setisFormVisible} Albums={albums} inAlbum= {inAlbum} setInAlbum={setInAlbum} />
    </>
  )
}

export default AlbumsPage
