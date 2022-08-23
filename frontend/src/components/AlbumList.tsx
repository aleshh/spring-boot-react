import styled from "styled-components";
import Album from "../interfaces/Album";
import AlbumRow from "./AlbumRow";

interface AlbumListProps {
  albums: Album[];
}

const List = styled.div`
  max-width: 800px;
  margin-top: 20px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--foreground);
`;

function AlbumList({ albums }: AlbumListProps) {
  return (
    <List>
      {albums.map((a) => (
        <AlbumRow key={a.artist + a.name} album={a} />
      ))}
    </List>
  );
}

export default AlbumList;
