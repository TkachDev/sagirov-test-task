import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./containers/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
