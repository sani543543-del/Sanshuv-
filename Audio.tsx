import React from "react";
import {Audio, Sequence, getRemotionEnvironment, staticFile, useVideoConfig} from "remotion";
import {SFX} from "../timing";
import {theme} from "../theme";

/** public/voiceover.mp3. Plays in Studio preview; OFF during render unless voiceoverInRender=true. */
export const PreviewAudio: React.FC<{voiceover: boolean; voiceoverInRender: boolean}> = ({voiceover, voiceoverInRender}) => {
  const rendering = getRemotionEnvironment().isRendering;
  const on = theme.flags.previewVoiceover && voiceover && (!rendering || voiceoverInRender);
  return on ? <Audio src={staticFile("voiceover.mp3")} volume={1} /> : null;
};

/** SFX from public/sfx/, started a few frames before the visual hit (see timing.ts). */
export const SfxLayer: React.FC = () => {
  const {fps} = useVideoConfig();
  return (
    <>
      {SFX.map(([sec, name, vol, rate], i) => (
        <Sequence key={i} from={Math.max(0, Math.round(sec * fps))} durationInFrames={Math.round(fps * 1.2)}>
          <Audio src={staticFile(`sfx/${name}.wav`)} volume={vol} playbackRate={rate} />
        </Sequence>
      ))}
    </>
  );
};
