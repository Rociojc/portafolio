import { FooterContainer } from "../../styles/layout/FooterStyle"
import { SocialMedia } from "../molecules/SocialMedia"

export const FooterLayout = () => {
  return (
    <>
    <hr style={{ width: "95%", margin: "auto" }} />
    <FooterContainer>
      <SocialMedia />
    </FooterContainer>
    </>
  )
}
