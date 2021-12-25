/**
 *  Between any two numbers
 * Math.floor(Math.random() * (max - min + 1)) + min;
 *
 * Between 0 and max
 * Math.floor(Math.random() * (max + 1));
 *
 * Between 1 and max
 * Math.floor(Math.random() * max) + 1;
 *
 * Gets random int
 * @param min
 * @param max
 * @returns random int - min & max inclusive
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomIntBetweenZeroMax(value: number): number {
  const max = Math.floor(value);
  return Math.floor(Math.random() * (max + 1));
}

export function getRandomIntBetweenOneMax(value: number): number {
  const max = Math.floor(value);
  return Math.floor(Math.random() * max) + 10;
}
