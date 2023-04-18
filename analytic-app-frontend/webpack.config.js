const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = (config, options) => {
  // Read environment.ts or environment.prod.ts
  const environmentPath = options.configuration === 'production' ? './src/environments/environment.prod.ts' : './src/environments/environment.ts';
  const environmentContent = fs.readFileSync(environmentPath, 'utf-8');

  // Extract ssoProvider value
  const ssoProviderMatch = environmentContent.match(/ssoProvider: ['"](.+?)['"]/);
  const ssoProvider = ssoProviderMatch ? ssoProviderMatch[1] : 'Native';

  // Log the ssoProvider value
  console.log('Detected ssoProvider:', ssoProvider);

  // Replace auth.module.ts with the corresponding module based on the ssoProvider value
  const authModuleMapping = {
    'OKTA': 'auth.okta.module.ts',
    'Microsoft': 'auth.microsoft.module.ts',
    'Native': 'auth.native.module.ts'
  };

  const authModulePath = path.join('./src/app', authModuleMapping[ssoProvider]);

  // Ensure config.resolve exists and set the alias
  if (!config.resolve) {
    config.resolve = {};
  }
  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }
  config.resolve.alias['@app/auth.module'] = path.resolve(__dirname, authModulePath);

  // Add Dotenv plugin
  config.plugins.push(
    new Dotenv({
      path: './.env'
    })
  );

  return config;
};
