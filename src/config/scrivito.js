import * as Scrivito from "scrivito";

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  unstable: {
    trustedUiOrigins: [
      "http://localhost:8090",
      "https://*.d2gu55vvqejsqp.amplifyapp.com",
      "https://*.netlify.app",
      "https://*.netlify.com",
      "https://dt5t498v8txnt.cloudfront.net",
    ],
  },
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

if (process.env.SCRIVITO_ENDPOINT) {
  config.endpoint = process.env.SCRIVITO_ENDPOINT;
}

Scrivito.configure(config);
