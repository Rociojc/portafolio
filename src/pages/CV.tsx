import { Icon } from "../components/atoms/Icon"
import { Text } from "../components/atoms/Text"
import { CVCaption } from "../components/molecules/CVCaption"
import { CVContainer, CVInfoDetailed, CVInfoGeneral, Lista } from "../styles/pages/CVStyles"

export const CV = () => {
  return (
    <CVContainer>
      <Text type="h2" color="indianRed" text="Curriculum Vitae" />
      <CVInfoGeneral>
        <article>
        <CVCaption iconName="icon-experiencia" text="EXPERIENCIA"/>
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Tech Developer" />
          <Text type="p1" color="black" text="Agosto 2022 - Septiembre 2022 - Rent me up" />
          <Text type="p1" color="brown" text="http://www.rentmeup.ml/" />
          <br />
          <Text type="p1" color="black" text="Página web de reserva, desarrollada con React, con estilo CSS en styled Component y consumo de API." />
        </CVInfoDetailed>
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Freelance" />
          <Text type="p1" color="black" text="Septiembre 2021 - Data Consultores" />
          <Text type="p1" color="brown" text="http://dataconsultores.net/" />
          <br />
          <Text type="p1" color="black" text="Diseño de mockup en Figma, Frontend con HTML y CSS, Diseño responsive" />
        </CVInfoDetailed>
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Freelance" />
          <Text type="p1" color="black" text="Junio 2021 - Julio 2021 - Rutinas de gimnasio" />
          <Text type="p1" color="brown" text="https://sharp-hoover-0c0968.netlify.app/" />
          <br />
          <Text type="p1" color="black" text="Diseño de mockup en Figma, Desarrollo de 24 páginas HTLM con estilo CSS, responsive, que incluía diferentes rutinas de gimnasio por 3 días, con descripción, imágenes y videos." />
        </CVInfoDetailed>
        </article>
        <article>
        <CVCaption iconName="icon-educacion" text="EDUCACION" />
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Tech Developer" />
          <Text type="p1" color="black" text="Digital House | Octubre 2021 - Actualmente" />
        </CVInfoDetailed>
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Curso de Frontend Developer" />
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Curso de HTML y CSS" />
          <Text type="p1" color="brown" style={{fontWeight: "bold"}} text="Curso de Grid Layout" />
          <Text type="p1" color="black" text="Platzi | 2021" />
        </CVInfoDetailed>
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="General English | Pre-intermediate" />
          <Text type="p1" color="black" text="P.I.C.E - Australia | Octubre 2019 - Mayo 2020" />
        </CVInfoDetailed>
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Profesional en Administración de Empresas" />
          <Text type="p1" color="black" text="Fundación Universitaria Unipanamericana | 2016" />
        </CVInfoDetailed>
        </article>
        <article>
        <CVCaption iconName="icon-skills" text="SKILLS" />
        <CVInfoDetailed>
          <Lista>
            <li><Text type="p1" color="black" text="HTML5" /></li>
            <li><Text type="p1" color="black" text="CSS3" /></li>
            <li><Text type="p1" color="black" text="Flexbox" /></li>
            <li><Text type="p1" color="black" text="VS Code" /></li>
            <li><Text type="p1" color="black" text="Figma" /></li>
            <li><Text type="p1" color="black" text="CSS Grid" /></li>
            <li><Text type="p1" color="black" text="SASS" /></li>
            <li><Text type="p1" color="black" text="Javascript" /></li>
            <li><Text type="p1" color="black" text="React" /></li>
          </Lista>
        </CVInfoDetailed>
        </article>
        <article>
        <CVCaption iconName="icon-lenguaje" text="LANGUAGES" />
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Español" />
          <Text type="p1" color="black" text="Nativo" />
        </CVInfoDetailed>
        <CVInfoDetailed>
          <Text type="p1" color="black" style={{fontWeight: "bold"}} text="Inglés" />
          <Text type="p1" color="black" text="Basico" />
        </CVInfoDetailed>
        </article>
        <article>
        <CVCaption iconName="icon-profesional-skills" text="PROFESIONAL SKILLS"/>
        <CVInfoDetailed>
          <Lista>
            <li><Text type="p1" color="black" text="Responsable" /></li>
            <li><Text type="p1" color="black" text="Organizada" /></li>
            <li><Text type="p1" color="black" text="Trabajo en equipo" /></li>
          </Lista>
        </CVInfoDetailed>
        </article>
      </CVInfoGeneral>
    </CVContainer>
  )
}
