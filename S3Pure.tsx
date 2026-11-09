import React from "react";
import {AbsoluteFill} from "remotion";
import {theme} from "../theme";
import {useCue} from "../components/Scene";
import {Breathe, Entrance, Glass, JarPanel, Sweep, Words} from "../components/Motion";

// Voiceover: "যারা চান সাধারণ খাবারেও extra taste যুক্ত হবে, খাঁটি ঘিয়ের সুন্দর একটা ঘ্রাণ থাকবে তাদের জন্যই মূলত এই ঘি।"
export const S3Pure: React.FC = () => {
  const at = useCue();
  return (
    <AbsoluteFill>
      <div style={{position: "absolute", left: 130, top: 0, bottom: 0, width: 960, display: "flex", flexDirection: "column", justifyContent: "center", gap: 38}}>
        <Entrance delay={at(11.85)} x={-80} y={0}>
          <Glass padding={44}>
            <Words text="সাধারণ খাবারেও" delay={at(11.9)} size={56} weight={500} color={theme.colors.textDim} />
            <Words text="extra taste" delay={at(12.5)} size={128} />
          </Glass>
        </Entrance>
        <Entrance delay={at(15.05)} x={-80} y={0}>
          <Glass padding={44}>
            <Words text="খাঁটি ঘিয়ের সুন্দর একটা" delay={at(15.1)} size={56} weight={500} color={theme.colors.textDim} />
            <Sweep delay={at(15.9)}>
              <Words text="ঘ্রাণ" delay={at(15.7)} size={128} hi={[0]} hiGlow />
            </Sweep>
          </Glass>
        </Entrance>
      </div>
      <div style={{position: "absolute", right: 170, top: 0, bottom: 0, display: "flex", alignItems: "center"}}>
        <Entrance delay={at(11.7)} x={120} y={0} from={0.9}>
          <Breathe><JarPanel width={570} height={760} dir={-1} /></Breathe>
        </Entrance>
      </div>
    </AbsoluteFill>
  );
};
