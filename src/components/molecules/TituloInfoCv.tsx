import { TituloInfoCVContainer } from "../../styles/molecules/TituloInfoCvStyle";
import { Icon } from "../atoms/Icon"
import { Text } from "../atoms/Text";

interface TituloInfoCvProps {
    iconName: string;
    text: string;
}

export const TituloInfoCv = ({iconName, text}: TituloInfoCvProps) => {
  return (
    <TituloInfoCVContainer color="lightSteelBlue">
      <Icon name={iconName} />
      <Text type="h3" color="black" text={text} />
    </TituloInfoCVContainer>
  );
}
