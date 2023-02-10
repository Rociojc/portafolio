import { BrowserRouter } from "react-router-dom";
import { DesingSystem } from "./components/DesingSystem";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Home />
      {/* <DesingSystem/> */}
    </BrowserRouter>
  );
}

export default App;
