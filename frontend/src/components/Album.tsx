interface AlbumProps {
  album: {
    name: string;
    artist: string;
  };
}

function Album({ album }: AlbumProps) {
  return (
    <div>
      <h4>{album.name}</h4>
      <h5>{album.artist}</h5>
      <hr />
    </div>
  );
}

export default Album;
