import AlbumList from "./components/AlbumList";
import AlbumInput from "./components/AlbumInput";
import { AlbumsContextProvider } from "./contexts/AlbumsContextProvider";

function App() {
  return (
    <AlbumsContextProvider>
      <div className="App">
        <AlbumInput />
        <AlbumList />
      </div>
    </AlbumsContextProvider>
  );
}

export default App;
