import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Showpage from "./Pages/Showpage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:id" element={<Showpage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
