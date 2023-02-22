import { Icon } from "./atoms/Icon";
import { Button } from "./atoms/Button";
import { Image } from "./atoms/Image";
import { Text } from "./atoms/Text";
import { Card } from "./molecules/Card";
import { Navigation } from "./molecules/Navigation";
import { CVCaption } from "./molecules/CVCaption";
import { SocialMedia } from "./molecules/SocialMedia";
import imagenPerfil from "../assets/img/foto_perfil.png";
import imagenRentMeUp from "../assets/img/desktop_home_ db.png";
import imagenDataConsultores from "../assets/img/home_data_consultores.png";
import imagenRutinas from "../assets/img/home_rutinas_gimnasio.png";
import imagenHTML from "../assets/img/logos_html-5.png";
import imagenCSS from "../assets/img/logos_css-3.png";
import imagenJavaScript from "../assets/img/logos_javascript.png";
import imagenReact from "../assets/img/logo-reactjs.png";

export const DesingSystem = () => {
  return (
    <>
      <h1 style={{ padding: "15px" }}>Desing System</h1>
      <hr />
      <h2 style={{ padding: "15px 15px 0" }}>Iconos</h2>
      <div style={{ display: "flex", gap: "10px", padding: "15px" }}>
        <Icon name="icon-home" />
        <Icon name="icon-person" />
        <Icon name="icon-document" />
        <Icon name="icon-linkedin" />
        <Icon name="icon-github" />
        <Icon name="icon-twitter" />
        <Icon name="icon-experiencia" />
        <Icon name="icon-educacion" />
        <Icon name="icon-skills" />
        <Icon name="icon-lenguaje" />
        <Icon name="icon-profesional-skills" />
      </div>
      <hr />
      <h2 style={{ padding: "15px 15px 0" }}>Imagenes</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "15px 0 15px 15px",
        }}
      >
        <Image url={imagenPerfil}/>
        <Image url={imagenRentMeUp} widht="400px" />
        <Image url={imagenDataConsultores} widht="400px" />
        <Image url={imagenRutinas} widht="400px" />
        <Image url={imagenHTML} />
        <Image url={imagenCSS} />
        <Image url={imagenJavaScript} />
        <Image url={imagenReact} />
      </div>
      <hr />
      <h2 style={{ padding: "15px 15px 0" }}>Botones</h2>
      <div style={{ display: "flex", gap: "10px", padding: "15px" }}>
        <Button type="icono" text="Inicio" name="icon-home" />
        <Button type="icono" text="Sobre me" name="icon-person" />
        <Button type="icono" text="CV" name="icon-document" />
        <Button type="texto" text="Inicio" name="icon-home" />
        <Button type="texto" text="Sobre me" name="icon-person" />
        <Button type="texto" text="CV" name="icon-document" />
      </div>
      <hr />
      <h2 style={{ padding: "15px 15px 0" }}>Texto</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "15px",
        }}
      >
        <Text type="h1" color="black" text="Heading1" />
        <Text type="h2" color="black" text="Heading2" />
        <Text type="h3" color="black" text="Heading3" />
        <Text type="h4" color="black" text="Heading4" />
        <Text type="p1" color="black" text="Text1" />
        <Text type="p2" color="black" text="Text2" />
      </div>
      <hr />
      <h2 style={{ padding: "15px 15px 0" }}>Navegacion</h2>
      <div style={{ display: "flex", gap: "30px", padding: "15px" }}>
        <Navigation type="icono" />
        <Navigation type="texto" />
      </div>
      <hr />
      <h2 style={{ padding: "15px" }}>Card</h2>
      <div style={{ padding: "15px" }}>
        <Card
          titulo="Heading3"
          imagenPortada={imagenRentMeUp}
          tech={["imagen-html"]}
        />
      </div>
      <hr />
      <h2 style={{ padding: "15px" }}>Titulo Info CV</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "15px",
        }}
      >
        <CVCaption iconName="icon-experiencia" text="EXPERIENCIA" />
        <CVCaption iconName="icon-educacion" text="EDUCACION" />
        <CVCaption iconName="icon-skills" text="SKILLS" />
        <CVCaption iconName="icon-lenguaje" text="LANGUAGES" />
        <CVCaption iconName="icon-profesional-skills" text="PROFESIONAL SKILLS"/>
      </div>
      <hr />
      <h2 style={{ padding: "15px" }}>Redes Sociales</h2>
      <div style={{ padding: "15px" }}>
        <SocialMedia />
      </div>
    </>
  );
}
