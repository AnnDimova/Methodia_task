import data from './data.js';
import styled from 'styled-components';
import Item from './Item';

export default function UItem() {
	return (
		<Wrapper className="section-center">
			{data.map((item) => {
				return <Item key={item.id} {...item} />;
			})}
		</Wrapper>
	);
}

const Wrapper = styled.section`
	column-gap: 0.7rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	justify-content: center;
	margin-top: 2rem;
`;