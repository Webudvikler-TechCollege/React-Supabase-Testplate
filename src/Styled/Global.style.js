import { createGlobalStyle } from "styled-components"
import { Reset } from "./Mixins.style"

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		font-family: ${(props) => props.theme.fonts[1]};
		color: ${(props) => props.theme.colors.primary};
	}

	body {
		${Reset};
		padding-top: 1rem;
	}

	h1 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: ${(props) => props.theme.fontsizes.l};
		margin-block: 0.8rem;
	}

	h2 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: 1.5rem;
		margin-block: 0rem;
		margin-bottom: 0rem;
	}

	h4 {
		color: ${(props) => props.theme.colors.primary};
		font-family: ${(props) => props.theme.fonts[0]};
		font-size: 1rem;
		margin-block: 0rem;
	}

	pre {
		font-family: ${(props) => props.theme.fonts[2]};
		font-size: 1.1rem;
	}	

	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.secundary};
		
		&:hover {
			color: ${(props) => props.theme.colors.quaternary};
		}
	}
`
export { GlobalStyle, Reset }
