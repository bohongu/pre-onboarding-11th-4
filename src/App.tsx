import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Search />} />
          <Route path="/:id" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
