import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Chatbot from "./pages/Chatbot";
import Layout from "./layouts/Layout";
import PopularReceipes from "./pages/PopularReceipes";
import FavoriteReceipes from "./pages/FavoriteReceipes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/receipe-generator" element={<Chatbot />} />
        <Route path="/popular-receipes" element={<PopularReceipes />} />
        <Route path="/favorite-receipes" element={<FavoriteReceipes />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
