import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function TravelTips() {
	const isWideVersion = useBreakpointValue({
		base: false,
		sm: true,
	});

	return (
		<Flex wrap="wrap" my={{ base: "36px", md: "80px" }} mx={{ base: "36px", xl: "140px" }} justify={{ base: "center", md: "space-evenly", lg: "space-between"}}>
			<Flex flexDir={["row", "column"]} align="center" justify="center" p="12px">
				{isWideVersion ? (
					<Image src="/cocktail.svg" alt="vida noturna" w="85px" h="85px" />
				) : (
					<Image src="/ellipse.svg" alt="ellipse" w="8px" h="8px" mr="8px" />
				)}
				<Text color="dark" fontSize="24px" fontWeight="600" mt={[0, "24px"]}>vida noturna</Text>
			</Flex>

			<Flex flexDir={["row", "column"]} align="center" justify="center" p="12px">
				{isWideVersion ? (
					<Image src="/surf.svg" alt="praia" w="85px" h="85px" />
				) : (
					<Image src="/ellipse.svg" alt="ellipse" w="8px" h="8px" mr="8px" />
				)}
				<Text color="dark" fontSize="24px" fontWeight="600" mt={[0, "24px"]}>praia</Text>
			</Flex>

			<Flex flexDir={["row", "column"]} align="center" justify="center" p="12px">
				{isWideVersion ? (
					<Image src="/building.svg" alt="moderno" w="85px" h="85px" />
				) : (
					<Image src="/ellipse.svg" alt="ellipse" w="8px" h="8px" mr="8px" />
				)}
				<Text color="dark" fontSize="24px" fontWeight="600" mt={[0, "24px"]}>moderno</Text>
			</Flex>

			<Flex flexDir={["row", "column"]} align="center" justify="center" p="12px">
				{isWideVersion ? (
					<Image src="/museum.svg" alt="clássico" w="85px" h="85px" />
				) : (
					<Image src="/ellipse.svg" alt="ellipse" w="8px" h="8px" mr="8px" />
				)}
				<Text color="dark" fontSize="24px" fontWeight="600" mt={[0, "24px"]}>clássico</Text>
			</Flex>

			<Flex flexDir={["row", "column"]} align="center" justify="center" p="12px">
				{isWideVersion ? (
					<Image src="/earth.svg" alt="e mais..." w="85px" h="85px" />
				) : (
					<Image src="/ellipse.svg" alt="ellipse" w="8px" h="8px" mr="8px" />
				)}
				<Text color="dark" fontSize="24px" fontWeight="600" mt={[0, "24px"]}>e mais...</Text>
			</Flex>
		</Flex>
	);
}
