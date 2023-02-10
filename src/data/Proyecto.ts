import imagenRentMeUp from "../assets/img/desktop_home_ db.png";
import imagenDataConsultores from "../assets/img/home_data_consultores.png";
import imagenRutinas from "../assets/img/home_rutinas_gimnasio.png";
import imagenHTML from "../assets/img/logos_html-5.png";
import imagenCSS from "../assets/img/logos_css-3.png";
import imagenReact from "../assets/img/logo-reactjs.png";

interface ProyectosProps {
    name: string,
    image: string,
    tech: string[],
}

export const proyectos: ProyectosProps[] = [
    {
        name: "Rent Me Up",
        image: imagenRentMeUp,
        tech: [
            imagenHTML,
            imagenCSS,
            imagenReact,
    ]
        
    },
    {
        name: "Data Consultores",
        image: imagenDataConsultores,
        tech: [
            imagenHTML,
            imagenCSS,
        ]
    },
    {
        name: "Rutinas Gimnasio",
        image: imagenRutinas,
        tech: [
            imagenHTML,
            imagenCSS,
        ]
    }
]