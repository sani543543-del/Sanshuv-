import React from "react";
import {AbsoluteFill, useCurrentFrame} from "remotion";
import {theme} from "../theme";

export const BgMesh: React.FC = () => {
  const frame = useCurrentFrame();
  const d1 = Math.sin(frame / 55) * 60, d2 = Math.cos(frame / 70) * 50;
  return (
    <AbsoluteFill style={{background: `linear-gradient(160deg, ${theme.colors.bgAlt} 0%, ${theme.colors.bg} 70%)`}}>
      <div style={{position: "absolute", width: 1300, height: 1300, borderRadius: "50%", top: -560, left: -380 + d1, filter: "blur(60px)",
        background: `radial-gradient(circle, ${theme.colors.primary}30, transparent 62%)`}} />
      <div style={{position: "absolute", width: 1000, height: 1000, borderRadius: "50%", bottom: -480, right: -300 - d2, filter: "blur(80px)",
        background: `radial-gradient(circle, ${theme.colors.accent}1F, transparent 65%)`}} />
    </AbsoluteFill>
  );
};

export const Grade: React.FC = () => (
  <AbsoluteFill style={{pointerEvents: "none"}}>
    <AbsoluteFill style={{backgroundColor: theme.colors.primary, mixBlendMode: "soft-light", opacity: 0.16}} />
    <AbsoluteFill style={{background: "linear-gradient(180deg, rgba(0,0,0,0.14), transparent 28%, transparent 72%, rgba(0,0,0,0.24))"}} />
  </AbsoluteFill>
);

export const Grain: React.FC = () => {
  const frame = useCurrentFrame();
  const noise = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`;
  return (
    <AbsoluteFill style={{pointerEvents: "none", backgroundImage: noise, backgroundSize: "220px",
      backgroundPosition: `${(frame * 7) % 220}px ${(frame * 13) % 220}px`, opacity: 0.07, mixBlendMode: "overlay"}} />
  );
};

export const Vignette: React.FC = () => (
  <AbsoluteFill style={{pointerEvents: "none", background: "radial-gradient(ellipse at center, transparent 54%, rgba(0,0,0,0.38) 100%)"}} />
);
