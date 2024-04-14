import transformerVariantGroup from "@unocss/transformer-variant-group";
import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss";

const green = "#1DB954";
const white = "#FFFFFF";
const black = "#191414";

export default defineConfig({
  presets: [presetUno(), presetTypography(), presetIcons()],
  transformers: [transformerVariantGroup()],
  theme: {
    colors: {
      black,
      white,
      green,
    },
  },
});
