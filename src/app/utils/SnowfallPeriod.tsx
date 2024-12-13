export const SnowfallPeriod = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const startSnowfall = new Date(currentYear, 11, 1, 0, 0, 0); // December 1st, 00:00
  const endSnowfall = new Date(currentYear, 11, 26, 0, 0, 0); // December 25th, 23:59:59
  return now >= startSnowfall && now < endSnowfall && process.env.NEXT_PUBLIC_SNOW == 'true';
};
