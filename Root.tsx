import React from "react";
import {Composition} from "remotion";
import {Main, MainProps} from "./Main";
import {theme} from "./theme";
import {DURATION_FRAMES} from "./timing";

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Main"
    component={Main}
    durationInFrames={DURATION_FRAMES}
    fps={theme.video.fps}
    width={theme.video.width}
    height={theme.video.height}
    defaultProps={{voiceover: true, voiceoverInRender: false}}
  />
);
