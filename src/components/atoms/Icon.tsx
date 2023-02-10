import { iconos } from "../../data/Icon";


interface IconProps {
  name: string | undefined;
}

export const Icon = ({ name }: IconProps) => {
  const iconoBuscado = iconos.find((icono) => icono.name === name);

  if (iconoBuscado === undefined) {
    return <p>Indique icono</p>;
  } else {
    return (
      <img
        src={iconoBuscado.url}
        alt={iconoBuscado.alt == null ? iconoBuscado.name : iconoBuscado.alt}
      />
    );
  }
};
