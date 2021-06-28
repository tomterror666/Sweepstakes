export function getCurrentTime(
  separator?: string,
  showSeconds: boolean = false
): string {
  const sep = separator ?? ":";
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hoursString = hours < 10 ? "0" + hours : hours;
  const minutesString = minutes < 10 ? "0" + minutes : minutes;
  const secondsString = seconds < 10 ? "0" + seconds : seconds;

  return (
    hoursString + sep + minutesString + (showSeconds ? sep + secondsString : "")
  );
}
