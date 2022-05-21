import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: '"Poppins", sans-serif',
  },
  colors: {
    text: {
      light: '#F5F8FA',
      dark: '#47585B',
    },
    info: {
      light: '#DADADA',
      dark: '#999999',
      100: 'rgba(153, 153, 153, 0.5)',
    },
    background: {
      light: '#DADADA',
      dark: '#999999',
    },
    yellow: {
      100: 'rgba(255, 186, 8, 0.5)',
      500: '#FFBA08',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#DADADA',
        color: '#47585B',
      },
    },
  },
});
