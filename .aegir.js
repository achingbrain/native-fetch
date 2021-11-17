/** @type {import('aegir').Options["build"]["config"]} */
const esbuild = {
  plugins: [
    {
      name: 'node built ins',
      setup (build) {
        build.onResolve({ filter: /^undici$/ }, () => {
          return { path: require.resolve('./scripts/undici') }
        })
      }
    }
  ]
}

/** @type {import('aegir').PartialOptions} */
module.exports = {
  build: {
    config: esbuild
  },
  test: {
    browser: {
      config: {
        buildConfig: esbuild
      }
    }
  }
}
