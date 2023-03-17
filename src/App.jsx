import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/Home";
import List from "./Pages/list/List";
import Hotel from "./Pages/hotel/hotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/hotels" element={<Hotel />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
