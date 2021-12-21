import { Flex } from '@chakra-ui/react';

import { TravelTipsItem } from './TravelTipsItem';

export function TravelTips() {
	return (
		<Flex wrap="wrap" my={{ base: "36px", md: "80px" }} mx={{ md: "16px", lg: "64px", xl: "140px" }} justify={{ base: "center", md: "space-evenly", lg: "space-between"}}>
			<TravelTipsItem title="vida noturna" image="cocktail" />
			<TravelTipsItem title="praia" image="surf" />
			<TravelTipsItem title="moderno" image="building" />
			<TravelTipsItem title="clássico" image="museum" />
			<TravelTipsItem title="e mais..." image="earth" />
		</Flex>
	);
}
