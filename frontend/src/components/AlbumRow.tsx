import styled from "styled-components";
import Album from "../interfaces/Album";

interface AlbumProps {
  album: Album;
}

const Row = styled.div({
  padding: 20,
});

function AlbumRow({ album }: AlbumProps) {
  return (
    <Row>
      <h4>
        {album.artist}: {album.name}
      </h4>
      <hr />
    </Row>
  );
}

export default AlbumRow;
