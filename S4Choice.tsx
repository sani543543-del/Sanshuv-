import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import {theme, clampBoth} from "../theme";
import {useCue} from "../components/Scene";
import {Breathe, Entrance, Glass, JarPanel, Words} from "../components/Motion";
import {Check, Cross} from "../components/Icons";

// Voiceover: "এবার আপনি বাজারের সস্তা ঘি নিয়ে ... নাকি Sanshuv Foods থেকে এই খাঁটি গাওয়া ঘি নিয়ে
//             আসল ঘিয়ের স্বাদ উপভোগ করবেন, তার decision সম্পূর্ণটাই আপনার হাতে।"
export const S4Choice: React.FC = () => {
  const at = useCue();
  const frame = useCurrentFrame();
  const line = interpolate(frame, [at(18.35), at(18.35) + 18], [0, 1], {easing: theme.ease.out, ...clampBoth});
  const leftDim = interpolate(frame, [at(22.0), at(22.0) + 12], [1, 0.5], {easing: theme.ease.out, ...clampBoth});
  return (
    <AbsoluteFill>
      {/* divider */}
      <div style={{position: "absolute", left: 959, top: 130, width: 2, height: 620, background: theme.colors.cardLine, transformOrigin: "top", transform: `scaleY(${line})`}} />

      {/* LEFT: cheap market ghee (muted) */}
      <div style={{position: "absolute", left: 130, top: 130, width: 740, height: 620, display: "flex", alignItems: "center", justifyContent: "center", opacity: leftDim}}>
        <Entrance delay={at(18.4)} x={-80} y={0}>
          <Glass width={600} padding={52} style={{filter: "saturate(0.35)"}}>
            <Cross size={96} color={theme.colors.bad} delay={at(18.4) + 8} />
            <Words text="বাজারের" delay={at(18.6)} size={60} weight={500} color={theme.colors.textDim} style={{marginTop: 12}} />
            <Words text="সস্তা ঘি" delay={at(18.9)} size={124} color={theme.colors.badDim} />
          </Glass>
        </Entrance>
      </div>

      {/* "নাকি" pill */}
      <div style={{position: "absolute", left: 0, width: 1920, top: 395, display: "flex", justifyContent: "center"}}>
        <Entrance delay={at(21.1)} y={0} from={0.5} config="bouncy">
          <div style={{padding: "6px 34px", borderRadius: 60, background: theme.colors.bg, border: `1px solid ${theme.colors.cardLine}`,
            fontFamily: theme.fonts.display, fontSize: 54, fontWeight: 600, lineHeight: 1.4, color: theme.colors.accent}}>
            নাকি
          </div>
        </Entrance>
      </div>

      {/* RIGHT: Sanshuv Foods */}
      <div style={{position: "absolute", left: 1010, top: 130, height: 620, display: "flex", alignItems: "center", gap: 48}}>
        <Entrance delay={at(21.9)} x={110} y={0} from={0.9}>
          <Breathe><JarPanel width={420} height={560} dir={1} /></Breathe>
        </Entrance>
        <div style={{width: 400, display: "flex", flexDirection: "column"}}>
          <Words text="Sanshuv Foods" delay={at(22.15)} size={62} color={theme.colors.accent} />
          <Words text="খাঁটি গাওয়া ঘি" delay={at(23.0)} size={70} style={{marginTop: 10}} />
          <Entrance delay={at(24.4)} y={30} style={{marginTop: 18}}>
            <div style={{display: "flex", alignItems: "center", gap: 18}}>
              <Check size={64} color={theme.colors.accent} delay={at(24.5)} />
              <Words text="আসল ঘিয়ের স্বাদ" delay={at(24.5)} size={50} weight={500} color={theme.colors.textDim} />
            </div>
          </Entrance>
        </div>
      </div>

      {/* decision banner */}
      <div style={{position: "absolute", left: 0, width: 1920, bottom: 96, display: "flex", justifyContent: "center"}}>
        <Words text="decision সম্পূর্ণটাই আপনার হাতে" delay={at(26.15)} size={76} justify="center" hi={[2, 3]} hiGlow />
      </div>
    </AbsoluteFill>
  );
};
