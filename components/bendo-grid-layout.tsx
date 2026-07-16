import { Grid, GridItem } from '@chakra-ui/react';
import { config } from '../config';
import { BendoGridItem } from './bendo-grid.item';

export const BendoGridLayout = () => {
	return (
		<Grid
			height="100%"
			width="100%"
			templateAreas={`". . . . . . . . ."
                            ". . . . . .  . blog ."
                            ". . . main main main . . ."
                            ". . . main main main . . ."
                            ". about . . . .  . . ."
                            ". . . . . . . . ."
                            ". . . . . . . . ."`}
			gridTemplateRows={'repeat(7, 1fr)'}
			gridTemplateColumns={'repeat(9, 1fr)'}
			gap={5}
		>
			<GridItem area={'left'} />
			<GridItem area={'top'} />
			<GridItem area={'about'}>
				{config.FEATURES.ABOUT && (
					<BendoGridItem label="About" href="/about" as="h2" size="xl" />
				)}
			</GridItem>
			<GridItem area={'main'}>
				<BendoGridItem label="Bence Varga" href="/" as="h1" size="2xl">
					<h2>Software Engineer</h2>
					<p>bencevarga666</p>
				</BendoGridItem>
			</GridItem>
			<GridItem area={'bottom'} />
			<GridItem area={'blog'}>
				{config.FEATURES.BLOG && (
					<BendoGridItem label="Blog" href="/blog" as="h2" size="xl" />
				)}
			</GridItem>
			<GridItem area={'right'} />
		</Grid>
	);
};
