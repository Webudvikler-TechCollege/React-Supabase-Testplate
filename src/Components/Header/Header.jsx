import { HeaderStyle } from "./Header.style"
import Logo from "../../assets/images/bagtanker/logo.png"
import { TopNav } from "../TopNav/TopNav"

export const Header = ({area}) => {
  return (
	<HeaderStyle $area={area}>
		<img src={Logo} alt="MedieSuset Logo" />
		<TopNav />
	</HeaderStyle>
  )
}
