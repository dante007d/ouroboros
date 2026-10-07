// 2nd-4th year question bank.
// PLACEHOLDER: until the senior question document arrives, seniors get the
// same questions as 1st year (ids prefixed S- so the two banks never mix).
// Replace this file's contents with the senior set; keep the same shape:
// { id, lv (0-60), q, options: [4 strings], a: index of correct option, type, topic }
import { JUNIOR } from './junior';

export const SENIOR = JUNIOR.map(q => ({ ...q, id: q.id.replace(/^J-/, 'S-') }));
