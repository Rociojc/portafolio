import { CardStyle, ImageContainer, ListTech } from "../../styles/molecules/CardStyle";
import { Image } from "../atoms/Image";
import { Text } from "../atoms/Text";

interface CardProps {
  titulo: string;
  imagenPortada: string;
  tech: string[];
}


export const Card = ({titulo, imagenPortada, tech}: CardProps) => {

  return (
    <>
      <CardStyle color="mistyRose">
        <Text type="h3" color="black" text={titulo} />
        <ImageContainer>
          <Image url={imagenPortada} widht="100%" height="100px" />
        </ImageContainer>
        <ListTech>
          {tech.map(l => (<Image key={l} url={l} />))}
        </ListTech>
      </CardStyle>
    </>
  );
}
