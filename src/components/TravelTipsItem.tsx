import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TravelTipsItemProps {
	title: string;
	image: string;
}

export function TravelTipsItem({ title, image }: TravelTipsItemProps) {
	const isWideVersion = useBreakpointValue({
		base: false,
		sm: true,
	});

	return (
		<Flex flexDir={["row", "column"]} align="center" justify="center" p="12px">
			{isWideVersion ? (
				<Image src={`/${image}.svg`} alt="praia" w="85px" h="85px" />
			) : (
				<Box w="8px" h="8px" mr="8px" bg="highlight" borderRadius="full" />
			)}
			<Text color="dark" fontSize="24px" fontWeight="600" mt={[0, "24px"]}>{title}</Text>
		</Flex>
	);
}
