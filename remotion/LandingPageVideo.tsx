import { useMemo } from 'react';
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from 'remotion';
import { BendoGridLayout } from '../components/bendo-grid-layout';
import { config } from '../config';

export const LandingPageVideo = () => {
	const frame = useCurrentFrame();

	const trainTranslateInPx = useMemo(() => {
		const startPosition = 0 - config.TRAIN_CONFIGURATION.WIDTH;
		return (
			startPosition +
			(frame / config.VIDEO_DURATION_IN_FRAMES) *
				(config.PLAYER_WIDTH + 2 * config.TRAIN_CONFIGURATION.WIDTH)
		);
	}, [frame]);

	return (
		<AbsoluteFill>
			<BendoGridLayout />
			<AbsoluteFill
				style={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'end',
				}}
			>
				{Array(10)
					.fill(0)
					.map((_, index) => {
						const { assetIndex, left, bottom, zIndex, width, height } =
							config.BUILDING_CONFIGURATION[index];

						return (
							<Img
								key={`building-${index}`}
								src={staticFile(
									`assets/landing-page-background/building_${assetIndex}.png`,
								)}
								style={{
									position: 'absolute',
									left: `${left}px`,
									bottom: `${bottom}px`,
									zIndex,
									width: `${width}px`,
									height: `${height}px`,
									filter: `grayscale(${config.GRAYSCALE_FILTER})`,
								}}
							/>
						);
					})}
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					src={staticFile('assets/landing-page-background/subway.png')}
					style={{
						position: 'absolute',
						bottom: `${config.TRAIN_CONFIGURATION.START_POSITION_BOTTOM}px`,
						left: `-${config.TRAIN_CONFIGURATION.START_POSITION_LEFT}px`,
						transform: `translateX(${trainTranslateInPx}px)`,
						width: `${config.TRAIN_CONFIGURATION.WIDTH}px`,
						height: `${config.TRAIN_CONFIGURATION.HEIGHT}px`,
						filter: `grayscale(${config.GRAYSCALE_FILTER})`,
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					src={staticFile('assets/landing-page-background/bridge.png')}
					style={{
						position: 'absolute',
						bottom: '0px',
						width: `${config.BRIDGE_CONFIGURATION.WIDTH}px`,
						height: `${config.BRIDGE_CONFIGURATION.HEIGHT}px`,
						filter: `grayscale(${config.GRAYSCALE_FILTER})`,
					}}
				/>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
