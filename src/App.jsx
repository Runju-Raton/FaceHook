import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";

function App() {
  return (
    <>
      <Routes>
          <Route element={<PrivateRoutes></PrivateRoutes>}>
              <Route path="/" element={<HomePage></HomePage>} exact></Route>
              <Route path="/me" element={<ProfilePage></ProfilePage>}></Route>
          </Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/registration" element={<RegistrationPage></RegistrationPage>}></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </>
  )
}

export default App
