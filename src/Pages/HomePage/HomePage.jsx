import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"
import { Hero } from "../../Components/Hero/Hero"
import AudienceImage from "../../assets/images/bagtanker/audience.png"

export const HomePage = () => {
  return (
    <>
      <Hero image={AudienceImage} text="Publikum" />
      <ContentWrapper
        title={"Forside"}
        description={"Du er landet på vores hjemmeside"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum odio fugit hic aut, natus vero labore ab, sed impedit consectetur ratione officia harum ea dolorem accusantium mollitia quidem. Ducimus!

      </ContentWrapper>
    </>
  )
}
