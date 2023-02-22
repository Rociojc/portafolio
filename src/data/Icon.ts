import iconHome from "../assets/icons/home.svg";
import iconPerson from "../assets/icons/person-add-sharp.svg";
import iconDocument from "../assets/icons/document-attach.svg";
import iconLinkedin from "../assets/icons/linkedin.svg";
import iconGitHub from "../assets/icons/github.svg";
import iconTwitter from "../assets/icons/twitter.svg";
import iconEmail from "../assets/icons/email.svg";
import iconExperiencia from "../assets/icons/experiencia.svg";
import iconEducacion from "../assets/icons/educacion.svg";
import iconSkills from "../assets/icons/skills.svg";
import iconLenguaje from "../assets/icons/lenguaje.svg";
import iconProfesionalSkills from "../assets/icons/profesional_skills.svg";

interface IconoType {
  url: string;
  name: string;
  alt?: string;
}

export const iconos: IconoType[] = [
  {
    name: "icon-home",
    url: iconHome,
    alt: "home",
  },
  {
    name: "icon-person",
    url: iconPerson,
  },
  {
    name: "icon-document",
    url: iconDocument,
  },
  {
    name: "icon-linkedin",
    url: iconLinkedin,
  },
  {
    name: "icon-github",
    url: iconGitHub,
  },
  {
    name: "icon-twitter",
    url: iconTwitter,
  },
  {
    name: "icon-email",
    url: iconEmail,
  },
  {
    name: "icon-experiencia",
    url: iconExperiencia,
  },
  {
    name: "icon-educacion",
    url: iconEducacion,
  },
  {
    name: "icon-skills",
    url: iconSkills,
  },
  {
    name: "icon-lenguaje",
    url: iconLenguaje,
  },
  {
    name: "icon-profesional-skills",
    url: iconProfesionalSkills,
  },
];