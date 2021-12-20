import { Flex, Image } from '@chakra-ui/react';

export function Header() {
	return (
		<Flex as="header" h={["50px", "100px"]} align="center" justify="center">
			<Image src="/logo.svg" alt="logo" height={["20px", "auto"]} />
		</Flex>
	);
}
