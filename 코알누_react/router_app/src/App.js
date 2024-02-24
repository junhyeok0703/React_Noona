import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import Loginpage from "./page/Loginpage";
import { useState } from "react";
import Userpage from "./page/Userpage";
function App() {
  const [userlogin, setUserlogin] = useState(true);
  const Privatepage = () => {
    return userlogin == true ? <Userpage /> : <Navigate to="/loginpage" />;
    //useNavigate는 훅이고 (페이지이동할떄 도와주고) 그냥 Navigate는 리다이렉션할때 도와줌
  };
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/Products/:id/:num" element={<ProductDetailPage />} />
      <Route path="/loginpage" element={<Loginpage />} />
      <Route path="/user" element={<Privatepage />} />
    </Routes>
  );
}
//Routes는 각각의 페이지를 스위치 하는 역할
//Route는 속성값이 path, element가 들어감
//페에지가 여러개이면 주소도 여러가지여야한다.
export default App;
