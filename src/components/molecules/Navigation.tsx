import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavContainer } from "../../styles/molecules/NavigationStyle";
import { Button } from "../atoms/Button"

interface NavigationProps {
    type: string;
}

export const Navigation = ({type}: NavigationProps) => {

  const navigate = useNavigate();
  const location = useLocation();
  const isActiveHome = location.pathname.includes("/home");
  const isActiveAboutMe = location.pathname.includes("/about-me");
  const isActiveCV = location.pathname.includes("/cv");
  

  return (
    <NavContainer>
      <Button type={type} text="Inicio" name="icon-home" click={() => navigate("/home")} className={isActiveHome ? "active" : ""}/>
      <Button type={type} text="Acerca de me" name="icon-person" click={() => navigate("/about-me")} className={isActiveAboutMe ? "active" : ""}/>
      <Button type={type} text="CV" name="icon-document" click={() => navigate("/cv")} className={isActiveCV ? "active" : ""}/>
    </NavContainer>
  );
}
