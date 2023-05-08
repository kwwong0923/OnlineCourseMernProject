import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components
import Layout from "./components/Layout"
import HomeComponent from "./components/home-compoent";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
