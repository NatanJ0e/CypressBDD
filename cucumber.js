const common = ` 
  --require setup/assertions.js 
  --require config/hooks.js 
  --require step-definitions/**/*.steps.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};