//@ts-nocheck
import {mask as masker} from 'remask';

export const useMask = (value: string, mask: string) => {
  return mask !== '' ? masker(value, mask) : value;
};
