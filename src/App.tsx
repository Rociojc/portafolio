import { Route, Routes } from "react-router-dom";
import { DesingSystem } from "./components/DesingSystem";
import { FooterLayout } from "./components/layout/FooterLayout";
import { NavLayout } from "./components/layout/NavLayout";
import { AboutMe } from "./pages/AboutMe";
import { CV } from "./pages/CV";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavLayout/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/cv" element={<CV />}/>
      </Routes>
      <FooterLayout/>
      {/* <DesingSystem/> */}
    </>
  );
}

export default App;
