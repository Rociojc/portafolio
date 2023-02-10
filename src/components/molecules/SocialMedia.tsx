import { SocialMediaContainer } from "../../styles/molecules/SocialMediaStyle";
import { Icon } from "../atoms/Icon"

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <Icon name="icon-linkedin" />
      <Icon name="icon-github" />
      <Icon name="icon-twitter" />
    </SocialMediaContainer>
  );
}
