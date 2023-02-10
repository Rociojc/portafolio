import { NavContainer } from "../../styles/molecules/NavigationStyle";
import { Button } from "../atoms/Button"

interface NavigationProps {
    type: string;
}

export const Navigation = ({type}: NavigationProps) => {
  return (
    <NavContainer>
      <Button type={type} text="Inicio" name="icon-home" />
      <Button type={type} text="Acerca de me" name="icon-person" />
      <Button type={type} text="CV" name="icon-document" />
    </NavContainer>
  );
}
