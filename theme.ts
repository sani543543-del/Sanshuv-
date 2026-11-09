// theme.ts — single source of truth: colors, fonts, easings, springs, flags.
import {Easing} from "remotion";
import {loadFont} from "@remotion/google-fonts/HindSiliguri";

// Bengali conjuncts (যুক্তাক্ষর) render correctly in Hind Siliguri.
const {fontFamily} = loadFont("normal", {
  weights: ["500", "600", "700"],
  subsets: ["bengali", "latin"],
});

export const theme = {
  colors: {
    bg: "#150C06", // deep brown from the logo shield
    bgAlt: "#2A1809",
    primary: "#F2B53E", // hero gold — max one element per frame
    accent: "#F6E7C8", // cream (label colour)
    text: "#FBF1DC",
    textDim: "#C2A47C",
    cardFill: "rgba(255, 238, 205, 0.07)",
    cardLine: "rgba(255, 232, 190, 0.20)",
    bad: "#B9573F", // muted brick red — only for the "cheap ghee" side
    badDim: "#7A5A48",
    panel: "#F6E9C9",
    glow: "rgba(242, 181, 62, 0.42)",
  },
  fonts: {display: fontFamily, body: fontFamily},
  ease: {
    out: Easing.bezier(0.16, 1, 0.3, 1),
    inOut: Easing.bezier(0.83, 0, 0.17, 1),
    in: Easing.bezier(0.7, 0, 0.84, 0),
  },
  spring: {
    snappy: {damping: 14, stiffness: 160, mass: 0.6},
    smooth: {damping: 20, stiffness: 90, mass: 1},
    bouncy: {damping: 11, stiffness: 170, mass: 0.7},
  },
  video: {width: 1920, height: 1080, fps: 30},
  flags: {
    // Voiceover is for previewing in Remotion Studio. During a render it is
    // OFF unless you pass --props='{"voiceoverInRender":true}'.
    previewVoiceover: true,
  },
} as const;

export const clampBoth = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;
