import { Box, Flex, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true,
	});

	return (
		<Flex backgroundImage="/background.svg" h={{ base: "163px", md: "249px", lg: "292px", xl: "335px"}} align="center" justify="space-between">
			<Box mx={{ base: "16px", md: "64px", lg: "64px", xl: "140px"}}>
				<Stack spacing={["8px", "20px"]}>
					<Box>
						<Text color="light" fontSize={{ base: "20px", lg: "24px", xl: "36px"}} fontWeight="500" lineHeight={{ base: "30px", lg: "42px", xl: "54px"}}>
							5 Continentes,<br />
							infinitas possibilidades.
						</Text>
					</Box>

					<Box>
						<Text color="info" fontSize={["14px", "20px"]} fontWeight="400" lineHeight={["21px", "30px"]}>
							Chegou a hora de tirar do papel a viagem que você sempre sonhou.
						</Text>
					</Box>
				</Stack>
			</Box>

			{isWideVersion && (
				<Box mt={{base: "130px", lg: "120px"}} mr={{ base: "64px", lg: "64px", xl: "140px"}}>
					<Image src="/airplane.svg" alt="avião" />
				</Box>
			)}
		</Flex>
	);
}
