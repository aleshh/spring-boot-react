import { useEffect, useState } from "react";
import AlbumRow from "./components/AlbumRow";
import Album from "./interfaces/Album";

const api = "http://localhost:8080/albums";

function App() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(function fetchAlbums() {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  if (albums.length === 0) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      {albums.map((a) => (
        <AlbumRow key={a.artist + a.name} album={a} />
      ))}
    </div>
  );
}

export default App;
