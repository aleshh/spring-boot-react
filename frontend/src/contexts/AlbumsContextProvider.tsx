import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchAlbums, postAlbum } from "../api/api";
import Album from "../interfaces/Album";

interface Context {
  albums: Album[];
  addAlbum?: (album: Album) => void;
}

const defaultContext = {
  albums: [],
};

const AlbumsContext = createContext<Context>(defaultContext);

function AlbumsContextProvider({ children }: { children: ReactNode }) {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    async function loadAlbums() {
      const albums = await fetchAlbums();
      setAlbums(albums);
    }

    loadAlbums();
  }, []);

  async function addAlbum(album: Album) {
    const newAlbums = await postAlbum(album);

    if (newAlbums) {
      setAlbums(albums);
    }
  }

  return (
    <AlbumsContext.Provider value={{ albums, addAlbum }}>
      {children}
    </AlbumsContext.Provider>
  );
}

function useAlbumsContext() {
  const context = useContext(AlbumsContext);

  if (context === undefined) {
    throw new Error("AlbumsContext could not find a Provider");
  }

  return context;
}

export { AlbumsContext, AlbumsContextProvider, useAlbumsContext };
