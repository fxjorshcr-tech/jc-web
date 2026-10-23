import { randomInt } from "node:crypto";

/** Unambiguous alphabet: no 0/O, 1/I. */
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateBookingCode(prefix = "JCJ") {
  let body = "";
  for (let i = 0; i < 6; i++) body += ALPHABET[randomInt(ALPHABET.length)];
  return `${prefix}-${body}`;
}
