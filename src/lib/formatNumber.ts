export default function formatNumber(num: number) {
  if (num < 1e3) return num.toString();
  else if (num < 1e6) return (num / 1e3).toFixed(1) + "K";
  else return (num / 1e6).toFixed(1) + "M";
}
