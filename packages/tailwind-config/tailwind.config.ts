import type { Config } from 'tailwindcss/types/config';
import typography from '@tailwindcss/typography';

export default {
  theme: {
    extend: {},
  },
  plugins: [typography],
} as Omit<Config, 'content'>;
