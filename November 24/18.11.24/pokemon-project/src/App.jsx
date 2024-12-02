import { useEffect, useState } from "react";
import "./App.css";

import PokDetails from "./components/PokDetails/PokDetails";
import About from "./components/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Main from "./components/Main/Main.jsx";
// import Home from "./components/Home/Home.jsx";
// import Create from "./components/Create/Create.jsx";
import Home from "@mui/icons-material/Home";
import Create from "@mui/icons-material/Create";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const [clickedPok, setClickedPok] = useState(null);

  useEffect(() => {
    clickedPok && setOpen(true);
  }, [clickedPok]);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>

      <Main setClickedPok={setClickedPok} />
      {clickedPok && (
        <PokDetails
          clickedPok={clickedPok}
          setClickedPok={setClickedPok}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}

export default App;
