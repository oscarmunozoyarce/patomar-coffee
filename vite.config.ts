import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/patomar-coffee/",
  plugins: [react()],
});
