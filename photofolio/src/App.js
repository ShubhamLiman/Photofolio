
import Navbar from './Components/Navbar/Navbar';
import AlbumsPage from './Pages/AlbumsPage'
import AlbumImages from './Pages/AlbumImages';
import { useState } from 'react';
function App() {
  const[inAlbum , setInAlbum] = useState({})
  return (
    <>
      <Navbar/>
      {(Object.keys(inAlbum).length === 0)?<AlbumsPage inAlbum={inAlbum} setInAlbum={setInAlbum} />:<AlbumImages inAlbum={inAlbum} />}
    </>
  );
}

export default App;
