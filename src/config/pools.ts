import { tokens } from '@/config/tokens';
import { PoolConfig } from '@/types';

import { contracts } from './contracts';

export const pools: PoolConfig[] = [
  {
    id: 0,
    stakingToken: tokens.rp1,
    earningToken: tokens.rp1,
    contractAddress: {
	  97:  contracts.MASTER_REFINER.ADDRESS,
    },
    tokenPerBlock: '1',
  },
  {
    id: 1,
    stakingToken: tokens.rp1,
    earningToken: tokens.satt,
    contractAddress: {
	  97:'0x8461359a84b9b5000ef51263548d3f1989760329'
    },
    tokenPerBlock: '0.0868',
    // isFinished: true,
  }
];
