import styled from "styled-components";
import Album from "../interfaces/Album";

interface AlbumProps {
  album: Album;
}

const Row = styled.div`
  padding: 14px 20px;
  border-bottom: 1px solid var(--foreground);
  &:last-child {
    border-bottom: none;
  }
`;

function AlbumRow({ album }: AlbumProps) {
  return (
    <Row>
      <h4>
        {album.artist}: <i>{album.name}</i>
      </h4>
    </Row>
  );
}

export default AlbumRow;
