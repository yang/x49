
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['bfPxfLqSaWDJU15at76CpA'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  