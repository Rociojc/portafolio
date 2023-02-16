import { ButtonMobile, ButtonText } from "../../styles/atoms/IconButtonStyle";
import { Icon } from "./Icon";
import { Text } from "./Text";


interface IconButtonProps {
  type: string;
  name: string;
  text: string;
  click?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

export const Button = ({type, name, text, click, style}: IconButtonProps) => {
  switch (type) {
    case "icono":
      return (
        <ButtonMobile color="lightSteelBlue" onClick={click} style={style}>
          <Icon name={name} />
        </ButtonMobile>
      );
    case "texto":
      return (
        <ButtonText onClick={click} style={style}>
          <Text type="h3" color="crimson" text={text} />
        </ButtonText>
      );
    default:
      return <p>indique tipo de boton</p>
  }
}
