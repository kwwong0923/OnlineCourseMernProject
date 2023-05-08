import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// Components
import Layout from "./components/Layout";
import HomeComponent from "./components/home-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";

// Services
import AuthService from "./services/auth.service";
function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />} />
          <Route path="register" element={<RegisterComponent />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="profile" element={<ProfileComponent />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
