import { Image } from "../components/atoms/Image";
import { Text } from "../components/atoms/Text";
import { Navigation } from "../components/molecules/Navigation";
import { Carousel } from "../components/organisms/Carousel";
import { FooterContainer, Header, ImagenPortada, InfoPortada, MainContainer, Portada, TituloPortada } from "../styles/pages/HomeStyles";
import imagenPerfil from "../assets/img/foto_perfil.png";
import { SocialMedia } from "../components/molecules/SocialMedia";

export const Home = () => {
  return (
    <div>
      <Header color="lightSteelBlue">
        <Navigation type="icono" />
      </Header>
      <Portada color="lightSteelBlue">
        <InfoPortada>
          <TituloPortada>
            <Text type="h1" color="indianRed" text="Rocio Jimenez" />
            <Text type="p1" color="brown" text="Desarrollador Frontend" />
          </TituloPortada>
          <ImagenPortada>
            <Image url={imagenPerfil} widht="100%" />
          </ImagenPortada>
        </InfoPortada>
      </Portada>
      <MainContainer>
        <div style={{ marginBottom: "20px" }}>
          <Text type="h3" color="black" text="MIS PROYECTOS" />
          <Text
            type="p1"
            color="black"
            text="Lorem ipsum dolor sit amet consectetur."
          />
        </div>
        <Carousel />
      </MainContainer>
      <hr style={{ width: "95%", margin: "auto" }} />
      <FooterContainer>
        <SocialMedia />
      </FooterContainer>
    </div>
  );
};
