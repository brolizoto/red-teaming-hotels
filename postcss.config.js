export default {
  plugins: {
    'postcss-preset-env': {
      stage: 2,
      features: {
        // Convert oklch() to rgb() fallbacks for older Safari/Firefox
        'color-function': true,
      },
      browsers: [
        'last 2 Safari versions',
        'last 2 Firefox versions',
        'last 2 Chrome versions',
        'last 2 Edge versions',
        'Safari >= 14',
        'Firefox >= 100',
      ],
    },
  },
};
