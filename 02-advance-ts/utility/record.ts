type Theme = "light" | "dark" | "system";

type ThemeColor = Record<Theme, string>;

const theme: ThemeColor = {
  light: "#ffffff",
  dark: "#000000",
  system: "#808080",
};
export {};
