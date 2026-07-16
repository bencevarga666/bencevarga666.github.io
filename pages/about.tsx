import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";
import { Badge, Box, Button, ButtonGroup, Heading, List, ListItem, Text } from "@chakra-ui/react";

type AboutSectionDataDate = {
    year: number;
    month?: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "November" | "December";
};

type AboutSectionDataItem = {
    organisation: string;
    positions: Array<{
        position: string;
        description?: string;
        from?: AboutSectionDataDate;
        to?: AboutSectionDataDate;
        technologies: Array<string>;
    }>;
};

type AboutSectionData = {
    title: string, items: Array<AboutSectionDataItem>
};

const formatDate = ({ year, month }: AboutSectionDataDate): string => {
	if (!year) {
		return "";
	}

	if (!month) {
		return `${year}`;
	}

	return `${year}. ${month}`;
};

const AboutSection = ({ title, items }: AboutSectionData): JSX.Element => {
	return (
		<Box sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			marginBottom: "2.5rem",
		}}>

			<Heading as='h2' size="3xl" noOfLines={1}>{title}</Heading>
			<List spacing={3}>
				{items.map(({ organisation, positions }) => (
					<ListItem as={Box} key={organisation}>
						<Heading as='h3' size="2xl">{organisation}</Heading>
						{positions.map(({ position, description, from, to, technologies }) => <Box
							key={position}
							sx={{
								width: "80vw",
								minHeight: "10rem",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: "0.625rem",
								border: "1px solid rgba(246, 211, 45, 0.59)",
								background: "rgba(246, 211, 45, 0.18)",
								backdropFilter: "blur(13px)",
								padding: "0.5rem",
							}}>
							<Heading as='h4' size="xl">
								{position}
								<Badge variant='outline' colorScheme='green' sx={{ marginLeft: "2rem" }}>
									{from && formatDate(from)} - {to && formatDate(to)}
								</Badge>
							</Heading>
							<Text fontSize="md">{description}</Text>
							<Box sx={{
								display: "flex",
								flexWrap: "wrap",
								justifyContent: "center",
								gap: "0.6rem",
								marginTop: "1rem",
							}}>
								{technologies.map((technology) => <Badge key={technology} variant="outline" colorScheme="red">{technology}</Badge>)}
							</Box>
						</Box>)}
					</ListItem>
				))}
			</List>
		</Box>
	);
};

const sections: Array<AboutSectionData> = [
	{ title: "About", items: [] },
	{
		title: "Experience",
		items: [
			{
				organisation: "Artera",
				positions: [
					{
						position: "Software Engineer",
						description: "I am currently working at Artera (formerly WELL Health) as a full-stack software engineer on the development of an information system to facilitate communication in healthcare. My work has included a rebranding process, message automations and settings management.",
						from: { year: 2022, month: "August" },
						to: { year: 2023, month: "September" },
						technologies: [
							"JavaScript",
							"TypeScript",
							"React.js",
							"Material UI",
							"Node.js",
							"Nest.js",
							"Express.js",
							"Jest",
							"HTML",
							"CSS",
							"SASS",
							"SQL",
							"PostgreSQL",
							"MongoDB",
							"GraphQL",
							"Git",
							"GitHub"
						],
					}
				],
			},
			{
				organisation: "One Beyond",
				positions: [
					{
						position: "Full-stack JavaScript Engineer",
						description: "I helped ContentCal/Adobe to bring scalable, robust social media automation capabilities to Adobe Express platform for millions of users as a full-stack software engineer.",
						from: { year: 2021, month: "June" },
						to: { year: 2022, month: "August" },
						technologies: [
							"JavaScript",
							"TypeScript",
							"Node.js",
							"Nest.JS",
							"Express.js",
							"Git",
							"React.js",
							"Redux.js",
							"Jest",
							"Github",
							"HTML",
							"CSS",
							"SQL",
							"PostgreSQL",
							"AWS Lambda",
							"Amazon CloudWatch",
							"Amazon DynamoDB",
							"Serverless",
							"Amazon SNS",
							"Amazon SQS",
						] }
				]
			},
			{
				organisation: "DACHS Computing & Biosciences",
				positions: [
					{
						position: "Application Developer",
						description: "I worked as a full-stack software engineer developing cloud-based collaboration and document management/document processing web applications for pharmaceutical companies. I gained experience in programmatic processing of XLSX and PDF documents.I worked as a full-stack software engineer developing cloud-based collaboration and document management/document processing web applications for pharmaceutical companies. I gained experience in programmatic processing of XLSX and PDF documents.",
						from: { year: 2019, month: "June" },
						to: { year: 2021, month: "June" },
						technologies: [
							"JavaScript",
							"Node.js",
							"Vue.js",
							"HTML",
							"CSS",
							"Git",
							"Jest",
							"C#",
							"ASP.NET Core",
							".NET Framework",
							"Entity Framework",
							"Java",
							"Bitbucket",
							"SQL",
							"PostgreSQL",
							"AWS Serverless Application Model",
							"AWS Lambda",
							"Amazon S3",
							"Amazon CloudWatch",
							"Amazon DynamoDB"
						]
					},
					{
						position: "Application Developer Intern",
						description: "",
						from: { year: 2018, month: "July" },
						to: { year: 2019, month: "June" },
						technologies: [
							"JavaScript",
							"Node.js",
							"Vue.js",
							"HTML",
							"CSS",
							"Jest",
							"C#",
							"ASP.NET Core",
							".NET Framework",
							"Entity Framework",
							"Unity 3D",
							"Java",
							"Git",
							"Bitbucket",
							"PostgreSQL",
							"SQL",
							"AWS Serverless Application Model",
							"AWS Lambda",
							"Amazon CloudWatch",
							"Amazon S3",
						]
					}
				]
			}]
	},
	{
		title: "Education", items: [
			{
				organisation: "University of Miskolc",
				positions: [
					{
						position: "Computer Science Engineering MSc",
						description: "My specialization is application development.",
						from: { year: 2020 },
						technologies: [
							"Node.js",
							"Git",
							"JavaScript",
							"GitHub",
							"HTML",
							"SQL",
							"CSS",
							"Bash",
							"Java",
							"LaTeX",
							"C",
							"CSS",
							"MongoDB",
							"Rust",
							"PostgreSQL",
							"Express.js",
							"Python",
							"Django",
						],
					},
					{
						position: "Computer Science BSc",
						description: "My specialization was modern web technologies (JavaScript, Node.JS, Express.JS, MongoDB, Bootstrap, React). Wrote my thesis work about implementing numerical methods in the Rust programming language and compare their performance with their C counterparts.My specialization was modern web technologies (JavaScript, Node.JS, Express.JS, MongoDB, Bootstrap, React). Wrote my thesis work about implementing numerical methods in the Rust programming language and compare their performance with their C counterparts.",
						from: { year: 2016 },
						to: { year: 2019 },
						technologies: [
							"Git",
							"JavaScript",
							"ASP.NET Core",
							"GitHub",
							"HTML",
							"SQL",
							"CSS",
							"Bash",
							"Java",
							"LaTeX",
							"C",
							"CSS",
							"Rust",
							"Express.js",
							"Python",
							"React.js",
							"R",
						],
					}]
			}
		]
	},
];

const AboutPage = () => {
	return (<Layout>
			<Head>
				<title>Bence Varga - bence.varga.bio</title>
			</Head>
			<Container >
				<Heading as='h1' size='4xl' noOfLines={1}  className="text-3xl font-bold underline">
                    Bence Varga
				</Heading>
				<Text as="p" size="md">bencevarga666</Text>
				<Heading as="p" size="md">Software Engineer</Heading>
			</Container>
			{sections.map((section) => <AboutSection key={section.title} {...section} />)}
			<Box sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "0.625rem",
				border: "1px solid rgba(246, 211, 45, 0.59)",
				background: "rgba(246, 211, 45, 0.18)",
				backdropFilter: "blur(13px)",
				padding: "0.5rem",
				marginY: "1rem",
				width: "80vw",
			}}>
				<Heading as="h2" size="3xl">Contact</Heading>
				<ButtonGroup>
					<Button sx={{
						borderRadius: "0.625rem",
						border: "1px solid rgba(246, 211, 45, 0.59)",
						background: "rgba(246, 211, 45, 0.18)",
						backdropFilter: "blur(13px)",
						padding: "0.5rem",
					}}>LinkedIn</Button>
					<Button sx={{
						borderRadius: "0.625rem",
						border: "1px solid rgba(246, 211, 45, 0.59)",
						background: "rgba(246, 211, 45, 0.18)",
						backdropFilter: "blur(13px)",
						padding: "0.5rem",
					}}>GitHub</Button>
					<Button sx={{
						borderRadius: "0.625rem",
						border: "1px solid rgba(246, 211, 45, 0.59)",
						background: "rgba(246, 211, 45, 0.18)",
						backdropFilter: "blur(13px)",
						padding: "0.5rem",
					}}>GitLab</Button>
					<Button sx={{
						borderRadius: "0.625rem",
						border: "1px solid rgba(246, 211, 45, 0.59)",
						background: "rgba(246, 211, 45, 0.18)",
						backdropFilter: "blur(13px)",
						padding: "0.5rem",
					}}>Email</Button>
				</ButtonGroup>
			</Box>
		</Layout>);
};

export default AboutPage;