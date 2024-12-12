import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["index.ts"],
  bundle: true,
  minify: false,
  sourcemap: true,
  outfile: "dist/index.js",
});
