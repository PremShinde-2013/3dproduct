/* eslint-disable no-unused-vars */
import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#cb48ef",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});
export default state;
