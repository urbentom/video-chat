import React from 'react';
import { Button } from 'antd';

type StartCallButtonComponentProps = {
	onMediaStreamChange: (stream: MediaStream) => void;
};

const StartCallButtonComponent: React.FC<StartCallButtonComponentProps> = (
	props
) => {
	return (
		<Button
			onClick={async () => {
				navigator.mediaDevices
					.getUserMedia({ audio: true, video: true })
					.then(props.onMediaStreamChange);
			}}
		>
			Start Call
		</Button>
	);
};

export default StartCallButtonComponent;
