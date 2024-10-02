import { Token } from '@/types';

import { contracts } from './contracts';

const NO_LOGO = 'https://kovan.etherscan.io/images/main/empty-token.png';

export const tokens: Record<
  'satt' | 'rp1' | 'fuel' | 'wbnb',
  Token
> = {
  satt: {
    symbol: 'SATT',
    address: {
	  97:'0x6fAc729f346A46fC0093126f237b4A520c40eb89'
    },
    decimals: 18,
    projectLink: 'https://www.example.com/',
    logoURI: NO_LOGO,
  },
  rp1: {
    symbol: 'RP1',
    address: {
      97: contracts.RP1.ADDRESS,
	
    },
    decimals: 18,
    projectLink: 'https://www.example.com/',
    logoURI: NO_LOGO,
  },
  fuel: {
    symbol: 'FUEL',
    address: {
	  97: '0x79f12d8ddf88e7637ddbd0ae5ffa6d8713db934b',
    },
    decimals: 18,
    projectLink: 'https://www.example.com/',
    logoURI: NO_LOGO,
  },
  wbnb: {
    symbol: 'WBNB',
    address: {
	  97: '0xba8c4704f89c811c20dfa5bb26372cc142ae84fd'
    },
    decimals: 18,
    projectLink: 'https://www.example.com/',
    logoURI: NO_LOGO,
  }
};
