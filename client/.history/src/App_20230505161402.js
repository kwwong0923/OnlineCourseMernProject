import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from "./components/Layout";
import HomeComponent from "./components/home-component";
import RegisterComponent from "./components/register-component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="login" element={} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
