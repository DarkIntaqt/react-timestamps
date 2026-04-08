export function formatUnixTimestamp(
  timestamp: number,
  locale: string = "en-US",
  relative: boolean = true,
): string {
  const date = new Date(timestamp * 1000);

  if (!relative) {
    return date.toLocaleString(locale);
  }

  const nowMs = Date.now();
  const targetMs = date.getTime();
  const diffMs = targetMs - nowMs;
  const absMs = Math.abs(diffMs);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  // 1 minute is "now"
  if (absMs < 60_000) {
    return rtf.format(0, "minute");
  }

  const minuteMs = 60_000;
  const hourMs = 60 * minuteMs;
  const dayMs = 24 * hourMs;
  const yearMs = 365 * dayMs;

  if (absMs < hourMs) {
    return rtf.format(Math.round(diffMs / minuteMs), "minute");
  }

  if (absMs < dayMs) {
    return rtf.format(Math.round(diffMs / hourMs), "hour");
  }

  if (absMs < yearMs) {
    return rtf.format(Math.round(diffMs / dayMs), "day");
  }

  return rtf.format(Math.round(diffMs / yearMs), "year");
}
