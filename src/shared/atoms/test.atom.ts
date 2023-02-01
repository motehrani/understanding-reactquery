import { atom, atomFamily } from 'recoil'

import { atomKeys } from '../constants/atom-keys'

export const testAtom = atom({
  key: atomKeys.testAtom,
  default: 0,
})
