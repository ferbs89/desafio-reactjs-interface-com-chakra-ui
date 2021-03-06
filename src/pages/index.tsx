import { Box, Divider, Flex, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTips } from '../components/TravelTips';

export default function Home() {
	return (
		<Box w="100%" maxWidth="1440px" mx="auto" bg="white">
			<Header />
			<Banner />
			<TravelTips />

			<Flex w="100%" flexDir="column" align="center" justify="center">
				<Divider w="90px" borderWidth={["1px", "2px"]} borderColor="dark" />

				<Text my={["24px", "52px"]} color="dark" fontSize={{ base: "20px", md: "24px", xl: "36px"}} fontWeight="500" lineHeight={{ base: "30px", md: "42px", xl: "54px"}} textAlign="center">
					Vamos nessa?<br />
					Então escolha seu continente
				</Text>
			</Flex>
		</Box>
	);
}
