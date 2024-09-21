import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Chatbot from "./pages/Chatbot";
import Layout from "./layouts/Layout";
// import OTP from "./pages/OTP";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/receipe-generator" element={<Chatbot />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/otp" element={<OTP />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
