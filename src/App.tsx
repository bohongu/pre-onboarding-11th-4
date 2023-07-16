import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Search />} />
        <Route path="/:id" element={<Result />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
