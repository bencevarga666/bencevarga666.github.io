import { Box } from "@chakra-ui/react";
import Meta from "./meta";

type Props = {
	preview?: boolean;
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<Box
			sx={{
				backgroundColor: "#000",
				color: "#CCC",
			}}
		>
			<Meta />
			<main
				style={{
					minHeight: "90vh",
				}}
			>
				{children}
			</main>
		</Box>
	);
};

export default Layout;
