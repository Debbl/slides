// @ts-check
import { defineConfig } from "@debbl/eslint-config";

export default defineConfig({
  typescript: true,
  react: {
    next: true,
    compiler: true,
  },
  tailwindcss: true,
  customConfig: {
    rules: {
      "tailwindcss/no-custom-classname": [
        "warn",
        {
          whitelist: ["reveal", "slides", "fragment"],
        },
      ],
    },
  },
});
