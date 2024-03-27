/** @format */

import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  site: "https://michal-1994.github.io",
  base: process.env.NODE_ENV === "production" ? "/astro-2024/" : "/",
});
