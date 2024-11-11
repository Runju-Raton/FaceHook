import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage></HomePage>} exact></Route>
          <Route path="/login" element={<LoginPage></LoginPage>} exact></Route>
          <Route path="/registration" element={<RegistrationPage></RegistrationPage>} exact></Route>
          <Route path="/me" element={<ProfilePage></ProfilePage>} exact></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>} exact></Route>
      </Routes>
    </>
  )
}

export default App
