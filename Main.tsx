import React from "react";
import {AbsoluteFill} from "remotion";
import {SC} from "./timing";
import {Scene} from "./components/Scene";
import {BgMesh, Grade, Grain, Vignette} from "./components/Layers";
import {PreviewAudio, SfxLayer} from "./components/Audio";
import {S1Hook} from "./scenes/S1Hook";
import {S2Cheap} from "./scenes/S2Cheap";
import {S3Pure} from "./scenes/S3Pure";
import {S4Choice} from "./scenes/S4Choice";
import {S5Promise} from "./scenes/S5Promise";
import {S6Close} from "./scenes/S6Close";

export type MainProps = {voiceover: boolean; voiceoverInRender: boolean};

// Layer stack (bottom -> top): BgMesh -> scenes (assets + graphics + type) -> Grade -> Grain -> Vignette
export const Main: React.FC<MainProps> = ({voiceover, voiceoverInRender}) => (
  <AbsoluteFill>
    <BgMesh />
    <Scene range={SC.hook}><S1Hook /></Scene>
    <Scene range={SC.cheap}><S2Cheap /></Scene>
    <Scene range={SC.pure}><S3Pure /></Scene>
    <Scene range={SC.choice}><S4Choice /></Scene>
    <Scene range={SC.promise}><S5Promise /></Scene>
    <Scene range={SC.close} exit={false}><S6Close /></Scene>
    <Grade />
    <Grain />
    <Vignette />
    <SfxLayer />
    <PreviewAudio voiceover={voiceover} voiceoverInRender={voiceoverInRender} />
  </AbsoluteFill>
);
