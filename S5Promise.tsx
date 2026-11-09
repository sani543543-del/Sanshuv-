import React from "react";
import {AbsoluteFill} from "remotion";
import {theme} from "../theme";
import {useCue} from "../components/Scene";
import {Entrance, Words} from "../components/Motion";
import {Check} from "../components/Icons";

// Voiceover: "তবে আমরা আপনাকে এতটুকু guarantee দিতে পারি, আমাদের এই ঘিতে
//             আপনারা কোনো ভেজালের নামগন্ধ পাবেন না।"
export const S5Promise: React.FC = () => {
  const at = useCue();
  return (
    <AbsoluteFill style={{alignItems: "center", justifyContent: "center"}}>
      <div style={{width: 1640, display: "flex", flexDirection: "column", alignItems: "center", gap: 30}}>
        <Entrance delay={at(31.95)} y={0} from={0.5} config="bouncy" style={{order: 0}}>
          <div style={{width: 150, height: 150, borderRadius: 75, border: `5px solid ${theme.colors.accent}`, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Check size={92} color={theme.colors.accent} delay={at(32.05)} />
          </div>
        </Entrance>
        <Words text="আমরা আপনাকে এতটুকু guarantee দিতে পারি" delay={at(28.35)} per={4} size={62} weight={500} color={theme.colors.textDim} justify="center" hi={[3]} hiColor={theme.colors.accent} />
        <div style={{marginTop: 10}}>
          <Words text="কোনো ভেজালের" delay={at(30.7)} size={150} justify="center" />
          <Words text="নামগন্ধ পাবেন না" delay={at(31.3)} size={150} justify="center" hi={[0]} hiGlow />
        </div>
      </div>
    </AbsoluteFill>
  );
};
