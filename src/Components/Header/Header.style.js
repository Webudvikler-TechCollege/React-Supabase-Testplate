import styled from 'styled-components';

export const HeaderStyle = styled.header`
	grid-area: ${props => props.$area};
	display: flex;
	justify-content: space-between;
	padding-bottom: 1rem;

	img {
		width: 220px;
	}
`
