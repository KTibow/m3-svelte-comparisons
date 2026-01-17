import { DynamicScheme, Hct, SchemeStyles, Variant } from "m3-dreamland";

let scheme = new DynamicScheme({
  sourceColorHct: Hct.fromInt(0x00c875a1),
  contrastLevel: 0,
  specVersion: "2025",
  variant: Variant.VIBRANT,
  isDark: true,
});

document.body.appendChild(
  <SchemeStyles scheme={scheme}>
  </SchemeStyles>,
);
