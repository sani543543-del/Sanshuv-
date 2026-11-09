import React, {createContext, useContext} from "react";
import {Sequence, interpolate, useCurrentFrame, useVideoConfig} from "remotion";
import {theme, clampBoth} from "../theme";

type Ctx = {start: number; dur: number};
const SceneCtx = createContext<Ctx>({start: 0, dur: 1});

/** Returns a function: absolute seconds -> frame local to the current scene. */
export const useCue = () => {
  const {fps} = useVideoConfig();
  const {start} = useContext(SceneCtx);
  return (sec: number) => Math.round(sec * fps) - start;
};
export const useSceneDuration = () => useContext(SceneCtx).dur;

const ExitWrap: React.FC<{enabled: boolean; children: React.ReactNode}> = ({enabled, children}) => {
  const frame = useCurrentFrame();
  const {dur} = useContext(SceneCtx);
  if (!enabled) return <>{children}</>;
  const t = interpolate(frame, [dur - 11, dur - 1], [0, 1], {easing: theme.ease.in, ...clampBoth});
  return (
    <div style={{position: "absolute", inset: 0, opacity: 1 - t, transform: `translateY(${-34 * t}px) scale(${1 - 0.04 * t})`}}>
      {children}
    </div>
  );
};

export const Scene: React.FC<{range: readonly [number, number]; exit?: boolean; children: React.ReactNode}> = ({range, exit = true, children}) => {
  const {fps} = useVideoConfig();
  const start = Math.round(range[0] * fps);
  const dur = Math.round(range[1] * fps) - start;
  return (
    <Sequence from={start} durationInFrames={dur}>
      <SceneCtx.Provider value={{start, dur}}>
        <ExitWrap enabled={exit}>{children}</ExitWrap>
      </SceneCtx.Provider>
    </Sequence>
  );
};
