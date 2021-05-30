import zeroLeft from './zeroLeft';

export function secondsToMinutes(seconds: number): string {
  const minutes = zeroLeft((seconds / 60) % 60);
  const secs = zeroLeft((seconds % 60) % 60);

  return `${minutes}:${secs}`;
}
