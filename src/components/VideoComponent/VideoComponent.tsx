import React, { MediaHTMLAttributes, useEffect, createRef } from 'react';
import styled from 'styled-components';

type VideoComponentProps = {
	getRef?: (ref: React.Ref<HTMLVideoElement>) => void;
	stream?: MediaHTMLAttributes<HTMLVideoElement>['src'];
};

const VideoComponent: React.FC<VideoComponentProps> = (props) => {
	const videoRef: React.Ref<HTMLVideoElement> = React.createRef();

	useEffect(() => {
		if (!props.stream) return;
		if (!videoRef.current) return;

		// @ts-ignore
		videoRef.current.srcObject = props.stream;
		videoRef.current.onloadedmetadata = function (e) {
			videoRef.current?.play();
		};
		console.log('Running', videoRef.current.srcObject);
	}, [props.stream]);

	return <Video ref={videoRef} />;
};

export default VideoComponent;

const Wrapper = styled.div``;
const Video = styled.video`
	height: 200px;
	width: 400px;
	position: relative;
`;
