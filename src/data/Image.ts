import imagenPerfil from "../assets/img/foto_perfil.png";
import imagenRentMeUp from "../assets/img/desktop_home_ db.png";
import imagenDataConsultores from "../assets/img/home_data_consultores.png";
import imagenRutinas from "../assets/img/home_rutinas_gimnasio.png"
import imagenHTML from "../assets/img/logos_html-5.png";
import imagenCSS from "../assets/img/logos_css-3.png";
import imagenJavaScript from "../assets/img/logos_javascript.png";
import imagenReact from "../assets/img/logo-reactjs.png";

interface ImageType {
  url: string;
  name: string;
  alt?: string;
}

export const imagenes: ImageType[] = [
  {
    url: imagenPerfil,
    name: "imagen-perfil",
  },
  {
    url: imagenRentMeUp,
    name: "imagen-rent-me-up",
  },
  {
    url: imagenDataConsultores,
    name: "imagen-data-consultores",
  },
  {
    url: imagenRutinas,
    name: "imagen-rutinas",
  },
  {
    url: imagenHTML,
    name: "imagen-html",
  },
  {
    url: imagenCSS,
    name: "imagen-css",
  },
  {
    url: imagenJavaScript,
    name: "imagen-javascript",
  },
  {
    url: imagenReact,
    name: "imagen-react",
  },
];