// timing.ts — ALL cue times (seconds, absolute in the video) live here.
// Derived from the voiceover (35.1s): sentence order from the script, boundaries
// snapped to the pauses measured in the audio with ffmpeg silencedetect.
// Not word-level exact: if a cue feels early/late in Studio, edit the number here.
import {theme} from "./theme";

export const FPS = theme.video.fps;
export const DURATION_SEC = 35.2;
export const DURATION_FRAMES = Math.round(DURATION_SEC * FPS);

export const SC = {
  hook: [0, 5.9],
  cheap: [5.9, 11.5],
  pure: [11.5, 18.2],
  choice: [18.2, 27.9],
  promise: [27.9, 33.3],
  close: [33.3, DURATION_SEC],
} as const;

// Sound effects: [time in s, file, volume, playbackRate]. Placed ~3 frames
// before the visual lands. Kit = whoosh, swipe, pop, click, chime.
export const SFX: ReadonlyArray<readonly [number, string, number, number]> = [
  [0.25, "pop", 0.34, 0.9], // "ঘি" lands
  [1.55, "whoosh", 0.22, 1], // headline
  [5.78, "swipe", 0.2, 1],
  [6.0, "whoosh", 0.2, 1], // heading
  [7.1, "click", 0.3, 1], // chemical
  [7.9, "click", 0.3, 1.12], // flavor
  [10.15, "pop", 0.3, 0.8], // "না" stamp
  [11.38, "swipe", 0.2, 1],
  [11.9, "pop", 0.3, 1], // card 1
  [15.05, "pop", 0.3, 1.15], // card 2
  [18.08, "swipe", 0.2, 1],
  [18.4, "pop", 0.28, 0.85], // cheap side
  [21.15, "click", 0.3, 1], // "নাকি"
  [21.9, "whoosh", 0.24, 1], // Sanshuv side
  [24.45, "chime", 0.2, 1],
  [26.1, "click", 0.3, 1.1], // decision banner
  [27.78, "swipe", 0.2, 1],
  [28.3, "pop", 0.28, 1],
  [30.6, "whoosh", 0.22, 1],
  [31.9, "chime", 0.2, 1.1],
  [33.2, "swipe", 0.18, 1],
  [33.5, "chime", 0.24, 0.9], // logo
];
