import { MainStyle } from "./Main.style"

export const Main = ({area, children}) => {
  return (
	<MainStyle $area={area}>
		{children}
	</MainStyle>
  )
}
