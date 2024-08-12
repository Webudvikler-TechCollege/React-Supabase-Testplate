import { HeroStyle } from "./Hero.style"

export const Hero = ({image, text}) => {
  return (
    <HeroStyle>
      <img src={image} alt={text} />
    </HeroStyle>
  )
}
