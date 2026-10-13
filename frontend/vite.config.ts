import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// Vite configuration using @tailwindcss/vite plugin instead of PostCSS
export default defineConfig({
  plugins: [tailwindcss()],
});
