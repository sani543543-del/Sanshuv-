import React from "react";
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from "remotion";
import {theme, clampBoth} from "../theme";
import {useCue, useSceneDuration} from "../components/Scene";
import {Breathe, Entrance, Words} from "../components/Motion";

// Voiceover: "...ইনশাআল্লাহ।"  Closing logo sting. Logo image is used untouched.
export const S6Close: React.FC = () => {
  const at = useCue();
  const frame = useCurrentFrame();
  const dur = useSceneDuration();
  const z = interpolate(frame, [0, dur], [1, 1.07], {easing: theme.ease.inOut, ...clampBoth});
  return (
    <AbsoluteFill style={{flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 120}}>
      <Entrance delay={at(33.35)} y={0} x={-90} from={0.8} config="bouncy">
        <Breathe amp={0.7}>
          <div style={{width: 540, height: 720, borderRadius: 38, overflow: "hidden", boxShadow: "0 50px 90px -24px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.3)"}}>
            <Img src={staticFile("logo.png")} style={{width: "100%", height: "100%", objectFit: "cover", transform: `scale(${z})`}} />
          </div>
        </Breathe>
      </Entrance>
      <div style={{display: "flex", flexDirection: "column", width: 860}}>
        <Words text="খাঁটি গাওয়া ঘি" delay={at(33.5)} size={128} hi={[0, 1, 2]} hiGlow />
        <Words text="ইনশাআল্লাহ" delay={at(33.75)} size={68} weight={500} color={theme.colors.textDim} style={{marginTop: 6}} />
        <Entrance delay={at(34.0)} y={26} style={{marginTop: 34}}>
          <div style={{fontFamily: theme.fonts.display, fontSize: 46, fontWeight: 500, lineHeight: 1.5, color: theme.colors.accent}}>
            <div>sanshuvfoods.sellbd.shop</div>
            <div>01619-036725</div>
          </div>
        </Entrance>
      </div>
    </AbsoluteFill>
  );
};
