import { Container, Heading, Link, ResponsiveValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { glassStyle } from "../styles/glass";

export const BendoGridItem = ({
	label,
	href = "/",
	as = "h2",
	size = "md",
	children,
}: {
	label: string;
	href: string;
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size: ResponsiveValue<
		| "xs"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl"
		| "7xl"
		| "8xl"
		| "9xl"
	>;
	children?: React.ReactNode;
}) => {
	return (
		<Container
			style={{
				...glassStyle,
				textAlign: "center",
				padding: "2em",
				width: "100%",
				height: "100%",
			}}
		>
			<Link as={NextLink} href={href}>
				<Heading as={as} size={size} noOfLines={1}>
					{label}
				</Heading>
				{children}
			</Link>
		</Container>
	);
};
