/* eslint-disable import/prefer-default-export */

export function parseBoolean(value: string): boolean {
  return value.trim().toLowerCase() === 'true';
}
