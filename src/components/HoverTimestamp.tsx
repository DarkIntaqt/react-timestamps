import React, { useMemo, useState } from "react";
import { formatUnixTimestamp } from "./timestamp.util";

export type HoverTimestampProps = {
  timestamp: number;
  locale?: string;
};

/**
 * Renders relative time by default and absolute time while the element is hovered.
 */
export const HoverTimestamp: React.FC<HoverTimestampProps> = ({
  timestamp,
  locale = "en-US",
}) => {
  const [showAbsolute, setShowAbsolute] = useState(false);

  const relativeText = useMemo(
    () => formatUnixTimestamp(timestamp, locale, true),
    [timestamp, locale],
  );

  const absoluteText = useMemo(
    () => formatUnixTimestamp(timestamp, locale, false),
    [timestamp, locale],
  );

  return (
    <span
      onMouseEnter={() => setShowAbsolute(true)}
      onMouseLeave={() => setShowAbsolute(false)}
    >
      {showAbsolute ? absoluteText : relativeText}
    </span>
  );
};
