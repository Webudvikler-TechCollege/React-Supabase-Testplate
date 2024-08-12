import { GridStyle } from './Grid.style';

export const Grid = ({children}) => {
	return (
		<GridStyle>
			{children}
		</GridStyle>
	);
}