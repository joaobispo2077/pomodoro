export function secondsToTime(seconds: number): string {
  const zeroLeft = (num: number) => Math.floor(num).toString().padStart(2, '0');

  const minutes = zeroLeft((seconds / 60) % 60);
  const secs = zeroLeft((seconds % 60) % 60);

  return `${minutes}:${secs}`;
}
