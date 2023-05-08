import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
