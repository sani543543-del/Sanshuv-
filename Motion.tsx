import React from "react";
import {Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {theme, clampBoth} from "../theme";
import {useSceneDuration} from "./Scene";

const c01 = (v: number) => Math.max(0, Math.min(1, v));

/** Entrance: opacity + translate + scale together (spring). */
export const Entrance: React.FC<{
  delay?: number; x?: number; y?: number; from?: number;
  config?: keyof typeof theme.spring; style?: React.CSSProperties; children: React.ReactNode;
}> = ({delay = 0, x = 0, y = 44, from = 0.92, config = "smooth", style, children}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const p = spring({frame: frame - delay, fps, config: theme.spring[config]});
  return (
    <div style={{opacity: c01(p), transform: `translate(${(1 - p) * x}px, ${(1 - p) * y}px) scale(${interpolate(p, [0, 1], [from, 1])})`, ...style}}>
      {children}
    </div>
  );
};

/** Idle micro-motion for anything that stays on screen. */
export const Breathe: React.FC<{amp?: number; children: React.ReactNode}> = ({amp = 1, children}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{transform: `translateY(${Math.sin(frame / 30) * 5 * amp}px) scale(${1 + Math.sin(frame / 22) * 0.012 * amp})`}}>
      {children}
    </div>
  );
};

/** Word-by-word reveal. Words split on SPACES only; letterSpacing stays 0 (Bengali). */
export const Words: React.FC<{
  text: string; delay?: number; per?: number; size: number; weight?: number;
  color?: string; hi?: number[]; hiColor?: string; hiGlow?: boolean; justify?: React.CSSProperties["justifyContent"];
  style?: React.CSSProperties;
}> = ({text, delay = 0, per = 3, size, weight = 700, color = theme.colors.text, hi = [], hiColor = theme.colors.primary, hiGlow = false, justify = "flex-start", style}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  return (
    <div style={{display: "flex", flexWrap: "wrap", columnGap: Math.round(size * 0.26), rowGap: 0, justifyContent: justify,
      fontFamily: theme.fonts.display, fontSize: size, fontWeight: weight, lineHeight: 1.3, letterSpacing: 0, color, ...style}}>
      {text.split(" ").map((w, i) => {
        const p = spring({frame: frame - delay - i * per, fps, config: theme.spring.snappy});
        const isHi = hi.includes(i);
        return (
          <span key={i} style={{display: "inline-block", opacity: c01(p), transform: `translateY(${(1 - p) * 34}px) scale(${interpolate(p, [0, 1], [0.94, 1])})`,
            color: isHi ? hiColor : undefined, textShadow: isHi && hiGlow ? `0 0 44px ${theme.colors.glow}` : undefined}}>
            {w}
          </span>
        );
      })}
    </div>
  );
};

/** Underline that draws left -> right under its children (highlight sweep). */
export const Sweep: React.FC<{delay: number; color?: string; thickness?: number; children: React.ReactNode}> = ({delay, color = theme.colors.primary, thickness = 8, children}) => {
  const frame = useCurrentFrame();
  const w = interpolate(frame, [delay, delay + 16], [0, 1], {easing: theme.ease.out, ...clampBoth});
  return (
    <span style={{position: "relative", display: "inline-block"}}>
      {children}
      <span style={{position: "absolute", left: 0, bottom: 6, height: thickness, borderRadius: thickness, width: "100%", background: color, transformOrigin: "left center", transform: `scaleX(${w})`}} />
    </span>
  );
};

/** Product jar on a cream panel, slow Ken Burns. White PNG background is multiplied into the panel. */
export const JarPanel: React.FC<{width: number; height: number; dir?: 1 | -1; src?: string}> = ({width, height, dir = 1, src = "jar-500g.png"}) => {
  const frame = useCurrentFrame();
  const dur = useSceneDuration();
  const t = interpolate(frame, [0, dur], [0, 1], {easing: theme.ease.inOut, ...clampBoth});
  const scale = dir > 0 ? 1 + 0.08 * t : 1.08 - 0.08 * t;
  const pan = (t - 0.5) * -28 * dir;
  return (
    <div style={{width, height, borderRadius: 40, overflow: "hidden", isolation: "isolate", position: "relative",
      background: `radial-gradient(ellipse at 50% 38%, #FFF6DD 0%, ${theme.colors.panel} 62%, #E8CE97 100%)`,
      boxShadow: "0 50px 90px -24px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(255,255,255,0.35)"}}>
      <Img src={staticFile(src)} style={{width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "multiply", transform: `scale(${scale}) translateX(${pan}px)`}} />
    </div>
  );
};

/** Glass card (30% surface layer). */
export const Glass: React.FC<{width?: number; padding?: number; style?: React.CSSProperties; children: React.ReactNode}> = ({width, padding = 40, style, children}) => (
  <div style={{width, padding, borderRadius: 34, background: theme.colors.cardFill, border: `1px solid ${theme.colors.cardLine}`,
    backdropFilter: "blur(14px)", boxShadow: "0 30px 60px -28px rgba(0,0,0,0.6)", ...style}}>
    {children}
  </div>
);
