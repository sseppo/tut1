const esbuild = require("esbuild");

esbuild
  .context({
    logLevel: "info",
    entryPoints: ["index.ts"],
    bundle: true,
    sourcemap: true,
    minify: true,
    outdir: "dist",
  })
  .then((r) => {
    console.log("✨ Build succeeded.");

    r.watch();
    console.log("watching...");
  })
  .catch(() => process.exit(1));

/*

      publicPath: 'assets',
    loader: {
      '.png': 'file',
      '.svg': 'file',
      '.jpeg': 'file',
      '.jpg': 'file',
    },

    */

/* ei toiminut toi watch osa enää

    require("esbuild")
  .build({
    entryPoints: ["index.ts"],
    bundle: true,
    minify: false,
    sourcemap: true,
    outfile: "dist/index.js",
  })
  .catch(() => process.exit(1));


  */
