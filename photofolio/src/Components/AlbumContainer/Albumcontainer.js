import React from 'react'
import "../AlbumContainer/Albumcontainer.css"

function Albumcontainer(props) {
    function handleAlbumClick(obj){
        props.setInAlbum(obj)
    }
  return (
    <>
      
      <div className='Albumscollection'>
        {props.Albums.map((a,index) => {
            return (
                <div key = {index} className="card mx-4 my-4" style={{width: "10rem"}} onClick={()=>{handleAlbumClick(a)}}>
                    <img src="https://images.unsplash.com/photo-1490661001679-6c363837a4e8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <p className="card-text">{a.albumName}</p>
                    </div>
                </div>
            )
        })}
      </div>
      
    </>
  )
}

export default Albumcontainer
