import type React from 'react';
import { Composition } from 'remotion';
import { config } from '../config';
import { LandingPageVideo } from './LandingPageVideo';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="Empty"
			component={LandingPageVideo}
			durationInFrames={config.VIDEO_DURATION_IN_FRAMES}
			fps={config.FPS}
			width={config.PLAYER_WIDTH}
			height={config.PLAYER_HEIGHT}
		/>
	);
};
