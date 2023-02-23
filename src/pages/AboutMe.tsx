import { Image } from '../components/atoms/Image'
import { Text } from '../components/atoms/Text'
import imagenAboutMe from '../assets/img/foto_about_me.png'
import { AboutContainer, AboutImage, AboutTitle, Parrafo1, Parrafo2 } from '../styles/pages/AboutMeStyles'

export const AboutMe = () => {
  return (
    <AboutContainer>
      <AboutTitle>
        <Text type="h2" color="indianRed" text="Acerca de mi" />
      </AboutTitle>
      <AboutImage>
        <Image url={imagenAboutMe}/>
      </AboutImage>
      <Parrafo1>
        <Text type="p1" color="black" text="Rocío Jiménez es una desarrolladora Front End Jr con un año de experiencia en el desarrollo de páginas web responsivas. Ella posee habilidades en HTML, CSS, JavaScript, Figma, Github, Gitlab y React. A lo largo de su carrera, ha realizado diversos proyectos que le han permitido poner en práctica sus conocimientos. Actualmente, se está especializando en el desarrollo Front End utilizando React y TypeScript." />
      </Parrafo1>
      <Parrafo2>
        <Text type="p1" color="black" text="Rocío es originaria de Bogotá, Colombia, aunque actualmente reside en Cali. Tiene un gran amor por la naturaleza, disfrutando de caminatas y explorar nuevos lugares. También es una entusiasta de la comida italiana y sueña con viajar a Italia para probar la pasta auténtica." />
      </Parrafo2>
    </AboutContainer>
  )
}
