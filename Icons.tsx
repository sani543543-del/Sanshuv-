import React from "react";
import {interpolate, useCurrentFrame} from "remotion";
import {theme, clampBoth} from "../theme";

/** Hand-drawn SVG glyphs (no emoji). `delay` = local frame the stroke starts drawing. */
const useDraw = (delay: number, len = 20) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [delay, delay + len], [1, 0], {easing: theme.ease.out, ...clampBoth});
};

export const Cross: React.FC<{size: number; color: string; delay?: number}> = ({size, color, delay = 0}) => {
  const d = useDraw(delay);
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round">
      <path d="M12 12 L36 36" pathLength={1} strokeDasharray={1} strokeDashoffset={d} />
      <path d="M36 12 L12 36" pathLength={1} strokeDasharray={1} strokeDashoffset={interpolate(d, [0, 1], [0, 1])} />
    </svg>
  );
};

export const Check: React.FC<{size: number; color: string; delay?: number; stroke?: number}> = ({size, color, delay = 0, stroke = 6}) => {
  const d = useDraw(delay, 22);
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 25 L20 35 L38 13" pathLength={1} strokeDasharray={1} strokeDashoffset={d} />
    </svg>
  );
};

export const NoSign: React.FC<{size: number; color: string; delay?: number}> = ({size, color, delay = 0}) => {
  const d = useDraw(delay, 18);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeWidth={7} strokeLinecap="round">
      <circle cx="50" cy="50" r="38" pathLength={1} strokeDasharray={1} strokeDashoffset={d} />
      <path d="M24 24 L76 76" pathLength={1} strokeDasharray={1} strokeDashoffset={d} />
    </svg>
  );
};

export const Drop: React.FC<{size: number; color: string}> = ({size, color}) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 40 52" fill={color}>
    <path d="M20 2 C20 2 4 24 4 34 C4 43 11 50 20 50 C29 50 36 43 36 34 C36 24 20 2 20 2 Z" />
  </svg>
);
