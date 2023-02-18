import { Image } from '../components/atoms/Image'
import { Text } from '../components/atoms/Text'
import imagenAboutMe from '../assets/img/foto_about_me.png'
import { AboutContainer, AboutImage, AboutInfo, AboutTitle, Parrafo1, Parrafo2 } from '../styles/pages/AboutMeStyles'

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
        <Text type="p1" color="black" text="Massa morbi ligula viverra metus consectetur nec velit nibh. Augue hendrerit lectus rutrum egestas sit proin. Sagittis id ullamcorper pulvinar eleifend integer egestas est. Tortor laoreet amet sed facilisis sed. Tortor lobortis suscipit pulvinar sed. Risus amet enim arcu blandit nunc nunc. Convallis laoreet nulla enim pellentesque eget amet elit. Ac aenean ullamcorper proin scelerisque." />
      </Parrafo1>
      <Parrafo2>
        <Text type="p1" color="black" text="Massa morbi ligula viverra metus consectetur nec velit nibh. Augue hendrerit lectus rutrum egestas sit proin. Sagittis id ullamcorper pulvinar eleifend integer egestas est. Tortor laoreet amet sed facilisis sed. Tortor lobortis suscipit pulvinar sed. Risus amet enim arcu blandit nunc nunc. Convallis laoreet nulla enim pellentesque eget amet elit. Ac aenean ullamcorper proin scelerisque." />
      </Parrafo2>
    </AboutContainer>
  )
}
