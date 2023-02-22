import { TituloInfoCVContainer } from "../../styles/molecules/TituloInfoCvStyle";
import { Icon } from "../atoms/Icon"
import { Text } from "../atoms/Text";

interface CVCaptionProps {
    iconName: string;
    text: string;
}

export const CVCaption = ({iconName, text}: CVCaptionProps) => {
  return (
    <TituloInfoCVContainer color="lightSteelBlue">
      <Icon name={iconName} />
      <Text type="h3" color="indianRed" text={text} />
    </TituloInfoCVContainer>
  );
}
