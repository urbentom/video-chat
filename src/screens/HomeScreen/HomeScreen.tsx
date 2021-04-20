import React, { useState, MediaHTMLAttributes } from 'react';
import { Typography, Card } from 'antd';
import styled from 'styled-components';
import StartCallButtonComponent from '../../components/StartCallButtonComponent';
import VideoComponent from '../../components/VideoComponent';

const { Title } = Typography;

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
	const [userVideoRef, setUserVideoRef] = useState<
		React.Ref<HTMLVideoElement> | undefined
	>(undefined);
	const [userVideoStream, setUserVideoStream] = useState<
		MediaHTMLAttributes<HTMLVideoElement>['src'] | undefined
	>(undefined);

	return (
		<Wrapper>
			<MainCard>
				<CardTitle level={1} underline>
					Hello Echo!
				</CardTitle>
				<StartCallButtonComponent
					onMediaStreamChange={(media: MediaStream) => {
						console.log('media', media);
						// @ts-expect-error
						setUserVideoStream(media);
					}}
				/>
				{userVideoStream && (
					<VideoComponent
						getRef={(ref) => {
							setUserVideoRef(ref);
						}}
						stream={userVideoStream}
					/>
				)}
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
