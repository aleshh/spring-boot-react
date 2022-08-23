import { useEffect, useState } from "react";
import Album from "./components/Album";

const api = "http://localhost:8080/albums";

function App() {
  const [albums, setAlbums] = useState([]);

  console.log(albums);

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
        <Album album={a} />
      ))}
    </div>
  );
}

export default App;
