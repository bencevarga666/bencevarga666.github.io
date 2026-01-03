import { Player } from "@remotion/player";
import Head from "next/head";
import React from "react";
import Layout from "../components/layout";
import { config } from "../config";
import { LandingPageVideo } from "../remotion/LandingPageVideo";

const LandingPage = () => {
	return (
		<>
			<Layout>
				<Head>
					<title>{"Bence László - bencelaszlo.hu"}</title>
				</Head>
				<Player
					component={LandingPageVideo}
					durationInFrames={config.VIDEO_DURATION_IN_FRAMES}
					compositionWidth={config.PLAYER_WIDTH}
					compositionHeight={config.PLAYER_HEIGHT}
					style={{ width: "100%" }}
					fps={config.FPS}
					loop
					autoPlay
					acknowledgeRemotionLicense
				/>
			</Layout>
		</>
	);
};

export default LandingPage;
