import React from "react";
import { formatUnixTimestamp } from "./timestamp.util";

export type TimestampProps = {
  timestamp: number;
  locale?: string;
  relative?: boolean;
};

/**
 * Shows unix-format time in a human readable format
 */
export const Timestamp: React.FC<TimestampProps> = ({
  timestamp,
  locale = "en-US",
  relative = true,
}) => {
  return formatUnixTimestamp(timestamp, locale, relative);
};
