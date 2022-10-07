import { useState, ChangeEvent } from "react";
import { useAlbumsContext } from "../contexts/AlbumsContextProvider";
import Album from "../interfaces/Album";

function AlbumInput() {
  const { addAlbum } = useAlbumsContext();
  const [newAlbum, setNewAlbum] = useState<Album>({ name: "", artist: "" });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    const newValue: Album = { ...newAlbum };
    if (!(id === "name" || id === "artist")) return;
    newValue[id] = value;
    setNewAlbum(newValue);
  }

  function handleSubmit() {
    if (!addAlbum) return;
    addAlbum(newAlbum);
  }

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
      <button style={{ padding: "2px 30px" }} onClick={handleSubmit}>
        Add
      </button>
    </>
  );
}

export default AlbumInput;
