import { useNavigate } from "react-router-dom";
import { NavContainer } from "../../styles/molecules/NavigationStyle";
import { Button } from "../atoms/Button"

interface NavigationProps {
    type: string;
}

export const Navigation = ({type}: NavigationProps) => {

  const navigate = useNavigate();

  return (
    <NavContainer>
      <Button type={type} text="Inicio" name="icon-home" click={() => navigate("/")}/>
      <Button type={type} text="Acerca de me" name="icon-person" click={() => navigate("/about-me")} />
      <Button type={type} text="CV" name="icon-document" click={() => navigate("/cv")} />
    </NavContainer>
  );
}
