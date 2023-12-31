/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    testTimeout: 10000000,
    hookTimeout: 30000,
  },
  logLevel: 'info',
  esbuild: {
    sourcemap: 'both',
  },
});
