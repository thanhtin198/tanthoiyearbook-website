(self.__BUILD_MANIFEST = (function (a, s, e) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    __routerFilterStatic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: 0,
      numHashes: e,
      bitArray: [],
    },
    __routerFilterDynamic: {
      numItems: 0,
      errorRate: 1e-4,
      numBits: a,
      numHashes: e,
      bitArray: [],
    },
    "/": ["static/chunks/pages/index-b80c14f616e923d0.js"],
    "/404": ["static/chunks/pages/404-43af312b4999699c.js"],
    "/_error": ["static/chunks/pages/_error-23404392cda61360.js"],
    "/default/[slug]": [
      "static/chunks/pages/default/[slug]-b1be960f18360ae2.js",
    ],
    "/multiLang/[lang]": [
      "static/chunks/pages/multiLang/[lang]-7c30c4536d4b303a.js",
    ],
    "/multiLang/[lang]/[slug]": [
      "static/chunks/pages/multiLang/[lang]/[slug]-69b75220104cec19.js",
    ],
    sortedPages: [
      "/",
      "/404",
      "/_app",
      "/_error",
      "/default/[slug]",
      "/multiLang/[lang]",
      "/multiLang/[lang]/[slug]",
    ],
  };
})(0, 0, NaN)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
