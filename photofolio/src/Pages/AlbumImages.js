import React from 'react'
import { useState} from 'react'
import ImageForm from '../Components/imagesForm/imageForm'
import ImagesContainer from '../Components/Imagecontainer/imagesContainer';

function AlbumImages({inAlbum,setInAlbum}) {
  const [isImageFormVisible, setisImageFormVisible] = useState(false);

  function handleFormVisible(){
    setisImageFormVisible(!isImageFormVisible);
  }
  function goToAlbums(e){
    e.preventDefault();
    setInAlbum({});
  }
  return (
    <>
      {
        isImageFormVisible && <ImageForm inAlbum={inAlbum} setInAlbum={setInAlbum }/>
      }
      <div className='ImagesandAddbtn container m-5' id='ImageButtons'>
        <button type="button" className="btn btn-outline-dark" onClick={goToAlbums}>Go to Albums</button>
          <h2>Images in {inAlbum.albumName}</h2>
          {isImageFormVisible ? <button type="button" className="btn btn-outline-danger" onClick={()=>{handleFormVisible()}}>Cancel</button> : <button type="button" className="btn btn-outline-primary" onClick={()=>{handleFormVisible()}}>Add Image</button>}
      </div>
      <ImagesContainer inAlbum={inAlbum} setInAlbum={setInAlbum}/>
    </>
  )
}

export default AlbumImages
