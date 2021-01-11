import { build, bundle, download, isDownloaded, ensureDownload, getFolderRoot } from './utils.js'
;(async () => {
  try {
    const pkg = {
      name: process.env.NPM_PACKAGE_NAME,
      version: process.env.NPM_PACKAGE_VERSION,
      main: process.env.NPM_PACKAGE_MAIN
    }
    console.log(pkg)
    await build(pkg)
    await bundle(pkg, pkg.main)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
