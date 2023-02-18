import { Image } from "../components/atoms/Image";
import { Text } from "../components/atoms/Text";
import { Carousel } from "../components/organisms/Carousel";
import { GridPortada, ImagenPortada, MainContainer, Portada, Proyectos, TituloPortada } from "../styles/pages/HomeStyles";
import imagenPerfil from "../assets/img/foto_perfil.png";

export const Home = () => {
  return (
    <>
      <MainContainer>
        <Portada color="lightSteelBlue">
          <GridPortada>
          <TituloPortada>
            <Text type="h1" color="indianRed" text="Rocio Jimenez" />
            <Text type="p1" color="brown" text="Desarrollador Frontend" />
          </TituloPortada>
          <ImagenPortada>
            <Image url={imagenPerfil} widht="100%" />
          </ImagenPortada>
          </GridPortada>
      </Portada>
      <Proyectos>
        <div style={{ marginBottom: "20px" }}>
          <Text type="h3" color="indianRed" text="MIS PROYECTOS" />
          <Text
            type="p1"
            color="black"
            text="Lorem ipsum dolor sit amet consectetur."
          />
        </div>
        <Carousel />
      </Proyectos>
      </MainContainer>
    </>
  );
};
