import zeroLeft from './zeroLeft';

export function secondsToTime(seconds: number): string {
  const hours = zeroLeft(seconds / 3600);
  const minutes = zeroLeft((seconds / 60) % 60);
  const secs = zeroLeft((seconds % 60) % 60);

  return `${hours}h ${minutes}m ${secs}s`;
}

console.log(secondsToTime(7250));
