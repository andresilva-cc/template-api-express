/* eslint-disable import/prefer-default-export */

function parseBoolean(value: string): boolean {
  return value.trim().toLowerCase() === 'true';
}

export { parseBoolean };
