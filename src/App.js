import Home from "./Components/Home";
import { TrackerDataProvider } from "./Context/TrackerDataContext";

function App() {
  return (
    <>
      <TrackerDataProvider>
        <Home />
      </TrackerDataProvider>
    </>
  );
}

export default App;
