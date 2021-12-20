import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        light: "#F5F8FA",
        info: "#DADADA",
        dark: "#47585B",
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
		global: {
			body: {
				bg: '#1D1D1D;',
			}
		}
	}
});
