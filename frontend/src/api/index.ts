import Album from "../interfaces/Album";

const url = "http://localhost:8080/albums";

export async function fetchAlbums() {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export async function postAlbum(album: Album) {
  console.log("posting album");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(album),
  });
  console.log("····························································");
  console.log(response);
  const data = response.json();
  return data;
}
