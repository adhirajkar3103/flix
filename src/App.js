import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Account from './pages/Account'
import Signup from './pages/Signup'
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={
        <ProtectedRoutes>
            <Account />
        </ProtectedRoutes>
        } />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
