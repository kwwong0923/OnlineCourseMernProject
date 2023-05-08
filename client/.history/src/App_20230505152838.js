import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
