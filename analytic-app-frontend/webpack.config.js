const Dotenv = require('dotenv-webpack');

const { merge } = require('webpack-merge');

const getAuthModuleReplacement = (ssoProvider) => {
    let imp;
    switch (ssoProvider) {
        case 'OKTA':
            imp = "import { AuthOktaModule } from './auth.okta.module';";
            break;
        case 'Microsoft':
            imp = "import { AuthMicrosoftModule } from './auth.microsoft.module';";
            break;
        default:
            imp = "import { AuthNativeModule } from './auth.native.module';";
            break;
    }
    return imp;
};

const getNgModuleReplacement = (ssoProvider) => {
    let mod;
    switch (ssoProvider) {
        case 'OKTA':
            mod = "AuthOktaModule,";
            break;
        case 'Microsoft':
            imp = "AuthMicrosoftModule,";
            break;
        default:
            imp = "AuthNativeModule";
            break;
    }
    return mod;
};

module.exports = {

    plugins: [
        new Dotenv({
            path: './.env'
        }),
    ],
};