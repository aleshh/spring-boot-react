import Album from "../interfaces/Album";

interface AlbumProps {
  album: Album;
}

function AlbumRow({ album }: AlbumProps) {
  return (
    <div>
      <h4>
        {album.artist}: {album.name}
      </h4>
      <hr />
    </div>
  );
}

export default AlbumRow;
