import React from 'react';
import { Typography, Card } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
	return (
		<Wrapper>
			<MainCard>
				<CardTitle level={1} underline>
					Hello Echo!
				</CardTitle>
			</MainCard>
		</Wrapper>
	);
};

export default HomeScreen;

const Wrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	align-items: center;
	justify-content: center;
`;

const MainCard = styled(Card)`
	width: 300px;
	height: 150px;
`;

const CardTitle = styled(Title)`
	text-align: center;
`;
