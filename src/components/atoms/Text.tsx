import { Heading1, Heading2, Heading3, Heading4, Text1, Text2 } from "../../styles/atoms/TextStyle";
import { colors } from "../../styles/global/Theme";

interface TextProps {
    type: string;
    color: string;
    text: string | undefined;
}

export const Text = ({type, color, text}: TextProps) => {

    const textColor =
      color === "lightSteelBlue"
        ? colors.lightSteelBlue
        : color === "mistyRose"
        ? colors.mistyRose
        : color === "lightPink"
        ? colors.lightPink
        : color === "indianRed"
        ? colors.indianRed
        : color === "crimson"
        ? colors.crimson
        : color === "brown"
        ? colors.brown
        : color === "white"
        ? colors.white
        : colors.black;

    switch (type) {
        case "h1":
            return <Heading1 color={textColor}>{text}</Heading1>
        case "h2":
            return <Heading2 color={textColor}>{text}</Heading2>;
        case "h3":
            return <Heading3 color={textColor}>{text}</Heading3>;
        case "h4":
            return <Heading4 color={textColor}>{text}</Heading4>;
        case "p1":
            return <Text1 color={textColor}>{text}</Text1>;
        case "p2":
            return <Text2 color={textColor}>{text}</Text2>;
        default:
            return <p>{text}</p>
    }
}
