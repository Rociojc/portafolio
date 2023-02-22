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
        <Text type="p1" color="black" text="Soy Rocio Jimenez, desarrolladora Front End Jr, cuento con 1 año de experiencia en el desarrollo de paginas web responsives, tengo conocimentos en Html, Css, Javascript, Figma, Github, Gitlab y React. Durante este año he realizado diferentes proyectos que me han ayudado a poner en practicas mis conocimientos. En este momento me estoy especializando en desarrollo Front End, utilizando React y TypeScript." />
      </Parrafo1>
      <Parrafo2>
        <Text type="p1" color="black" text="Soy de Bogotá-Colombia, actualmente vivo en Cali-Colombia, me gusta mucho la naturaleza, hacer caminatas y conocer lugares nuevos, me encanta la comida Italiana y mi sueño es conocer Italia y probar la autentica pasta." />
      </Parrafo2>
    </AboutContainer>
  )
}
