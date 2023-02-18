import { FooterContainer } from "../../styles/layout/FooterStyle"
import { SocialMedia } from "../molecules/SocialMedia"

export const FooterLayout = () => {
  return (
    <>
    <FooterContainer>
      <hr style={{ width: "95%", margin: "0 auto" }} />
      <SocialMedia />
    </FooterContainer>
    </>
  )
}
