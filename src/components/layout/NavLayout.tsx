import { useEffect, useState } from "react";
import { Header } from "../../styles/layout/HeaderStyle"
import { Navigation } from "../molecules/Navigation"

export const NavLayout = () => {
  const [ mobile, setMobile ] = useState(true);

  useEffect(() => {
    const responsive = () => window.innerWidth < 768 ? setMobile(true) : setMobile(false);
    responsive();
    window.addEventListener("resize", ()=>responsive())
  }, [])

  return (
    <Header color="lightSteelBlue">
        <Navigation type={mobile ? "icono" : "texto"} />
    </Header>
  )
}
