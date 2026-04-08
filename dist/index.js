// src/components/Timestamp.tsx
import "react";

// src/components/timestamp.util.ts
function formatUnixTimestamp(timestamp, locale = "en-US", relative = true) {
  const date = new Date(timestamp * 1e3);
  if (!relative) {
    return date.toLocaleString(locale);
  }
  const nowMs = Date.now();
  const targetMs = date.getTime();
  const diffMs = targetMs - nowMs;
  const absMs = Math.abs(diffMs);
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  if (absMs < 6e4) {
    return rtf.format(0, "minute");
  }
  const minuteMs = 6e4;
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

// src/components/Timestamp.tsx
var Timestamp = ({
  timestamp,
  locale = "en-US",
  relative = true
}) => {
  return formatUnixTimestamp(timestamp, locale, relative);
};

// src/components/HoverTimestamp.tsx
import { useMemo, useState } from "react";
import { jsx } from "react/jsx-runtime";
var HoverTimestamp = ({
  timestamp,
  locale = "en-US"
}) => {
  const [showAbsolute, setShowAbsolute] = useState(false);
  const relativeText = useMemo(
    () => formatUnixTimestamp(timestamp, locale, true),
    [timestamp, locale]
  );
  const absoluteText = useMemo(
    () => formatUnixTimestamp(timestamp, locale, false),
    [timestamp, locale]
  );
  return /* @__PURE__ */ jsx(
    "span",
    {
      onMouseEnter: () => setShowAbsolute(true),
      onMouseLeave: () => setShowAbsolute(false),
      children: showAbsolute ? absoluteText : relativeText
    }
  );
};

// src/index.ts
var index_default = Timestamp;
export {
  HoverTimestamp,
  index_default as default
};
