import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";
import "./global.css";

const typography = new Typography(kirkhamTheme);

export default typography;
export const rhythm = typography.rhythm;
