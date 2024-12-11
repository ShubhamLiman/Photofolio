import React from 'react'
import "../imagesCarasoul/imagecarasoul.css"
function Imagecarasoul({showCaroseul, inAlbum}) {
  return (
    <>
        <div className='mx-5'>
            <button type="button" className="btn btn-dark" onClick={(e)=>{
              e.stopPropagation();
              showCaroseul();
            }}>X</button>
        </div>
        <div id="carouselExample" className="carousel slide">
            {inAlbum.images.map((img,index) => {
              return(
                <div className="carousel-inner" key={index}>
                    <div className="carousel-item active">
                      <img src={img.url} className="d-block w-100" alt="..."/>
                    </div>
                </div>
              )
            })}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <i className="fa-solid fa-backward" style={{color:"black"}}></i>
            
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <i className="fa-solid fa-forward" style={{color:"black"}}></i>
            </button>
        </div>
    </>
  )
}

export default Imagecarasoul
