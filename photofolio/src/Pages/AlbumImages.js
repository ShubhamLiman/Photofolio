import React from 'react'
import ImageForm from '../Components/imagesForm/imageForm'
function AlbumImages({inAlbum}) {
  const {albumName,images,createdon,id} = inAlbum;
  console.log(albumName+" "+images+" "+createdon+" "+id);
  
  
  return (
    <div>
      <ImageForm inAlbum={inAlbum} />
    </div>
  )
}

export default AlbumImages
