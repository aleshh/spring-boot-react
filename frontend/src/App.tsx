import { useEffect, useState } from "react";

const api = "http://localhost:8080/albums";

function App() {
  const [albums, setAlbums] = useState([]);

  console.log(albums);

  useEffect(function fetchAlbums() {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return <div className="App">React app</div>;
}

export default App;
