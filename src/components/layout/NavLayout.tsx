import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../styles/layout/HeaderStyle"
import { Navigation } from "../molecules/Navigation"

export const NavLayout = () => {
  const [ mobile, setMobile ] = useState(true);
  const location = useLocation();
  let background1 = location.pathname.includes("/about-me");
  let background2 = location.pathname.includes("/cv");

  useEffect(() => {
    const responsive = () => window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    responsive();
    window.addEventListener("resize", ()=>responsive())
  }, [])

  return (
    <Header color={background1 ? "transparent" : background2 ? "transparent" : "lightSteelBlue" }>
        <Navigation type={mobile ? "icono" : "texto"} />
    </Header>
  )
}
