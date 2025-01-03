import "./App.css";
import { Header } from "./components/Header";
import "./index.css";
import Examples from "./components/Examples";
import CoreConcepts from "./components/CoreConcepts";
function App() {
  return (
    <>
      <Header />

      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
