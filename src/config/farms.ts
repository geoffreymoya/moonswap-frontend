import { FarmConfig } from '@/types';

import { contracts } from './contracts';
import { tokens } from './tokens';

export const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'RP1',
    lpAddresses: {
      97: contracts.RP1.ADDRESS,
    },
    token: tokens.fuel,
    quoteToken: tokens.wbnb, // ??
    categoryType: 'core',
  },
  {
    pid: 1,
    lpSymbol: 'SATT-RP1 LP',
    lpAddresses: {
      97: '0x8461359a84b9B5000EF51263548D3f1989760329',
    },
    token: tokens.satt,
    quoteToken: tokens.rp1,
    categoryType: 'core',
  },
  {
    pid: 2,
    lpSymbol: 'SATT-WBNB LP',
    lpAddresses: {
      97: '0x2678250700f9527df9d870482bacea5369e4c9e4',
    },
    token: tokens.satt,
    quoteToken: tokens.wbnb,
    categoryType: 'core',
  },
];
