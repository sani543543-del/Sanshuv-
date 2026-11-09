import React from "react";
import {AbsoluteFill} from "remotion";
import {theme} from "../theme";
import {useCue} from "../components/Scene";
import {Breathe, Entrance, JarPanel, Words} from "../components/Motion";

// Voiceover: "দেখেন ভাই, ঘি এমন কোনো essential product না যেটা আপনাকে খাওয়াই লাগবে।"
export const S1Hook: React.FC = () => {
  const at = useCue();
  return (
    <AbsoluteFill>
      <div style={{position: "absolute", left: 140, top: 0, bottom: 0, width: 1000, display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <Entrance delay={at(0.3)} y={70} from={0.78} config="bouncy">
          <div style={{fontFamily: theme.fonts.display, fontSize: 300, fontWeight: 700, lineHeight: 1.25, color: theme.colors.primary,
            textShadow: `0 0 60px ${theme.colors.glow}, 0 0 120px rgba(242,181,62,0.2)`}}>
            ঘি
          </div>
        </Entrance>
        <Words text="essential product না" delay={at(1.65)} size={112} />
        <Words text="যেটা আপনাকে খাওয়াই লাগবে" delay={at(3.0)} size={60} weight={500} color={theme.colors.textDim} style={{marginTop: 22}} />
      </div>
      <div style={{position: "absolute", right: 150, top: 140}}>
        <Entrance delay={at(0.55)} x={140} y={0} from={0.9}>
          <Breathe><JarPanel width={600} height={800} dir={1} /></Breathe>
        </Entrance>
      </div>
    </AbsoluteFill>
  );
};
