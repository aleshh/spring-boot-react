import styled from "styled-components";
import { useAlbumsContext } from "../contexts/AlbumsContextProvider";
import AlbumRow from "./AlbumRow";

const List = styled.div`
  max-width: 800px;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--foreground);
`;

function AlbumList() {
  const { albums } = useAlbumsContext();

  return (
    <List>
      {albums.map((a) => (
        <AlbumRow key={a.id || a.artist + a.name} album={a} />
      ))}
    </List>
  );
}

export default AlbumList;
