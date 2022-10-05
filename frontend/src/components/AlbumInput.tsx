import { useState, ChangeEvent } from "react";
import Album from "../interfaces/Album";

function AlbumInput() {
  const [newAlbum, setNewAlbum] = useState<Album>({ name: "", artist: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    console.log(id, value);
    const newValue: Album = { ...newAlbum };
    if (!(id === "name" || id === "artist")) return;
    newValue[id] = value;
    setNewAlbum(newValue);
  }

  function handleSubmit() {}

  return (
    <>
      <label htmlFor="artist">Artist </label>
      <input
        id="artist"
        type="text"
        onChange={handleChange}
        value={newAlbum.artist}
      />
      <label htmlFor="name">Album name </label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={newAlbum.name}
      />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
}

export default AlbumInput;
