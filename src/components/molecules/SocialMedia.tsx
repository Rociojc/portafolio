import { Link } from "react-router-dom";
import { SocialMediaContainer } from "../../styles/molecules/SocialMediaStyle";
import { Icon } from "../atoms/Icon"

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <Link to="https://www.linkedin.com/in/rocio-jc/" target="_blank">
        <Icon name="icon-linkedin" />
      </Link>
      <Link to="https://github.com/Rociojc" target="_blank">
        <Icon name="icon-github" />
      </Link>
      <Link to="mailto:ennarociojc@gmail.com ">
        <Icon name="icon-email" />
      </Link>
    </SocialMediaContainer>
  );
}
