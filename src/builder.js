import { getFolderRoot, ensureDownload } from './utils.js'
import esbuild from 'esbuild'
import glob from 'glob'
import path from 'path'

const { startService } = esbuild
;(async () => {
  try {
    const pkg = {
      name: process.env.NPM_PACKAGE_NAME,
      version: process.env.NPM_PACKAGE_VERSION,
      main: process.env.NPM_PACKAGE_MAIN
    }
    await build(pkg)
    await bundle(pkg, pkg.main)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

export async function build(pkg) {
  const { name: pkgName, version: pkgVersion } = pkg
  await ensureDownload(pkg)

  const pkgPath = getFolderRoot('pkgs', `${pkgName}@${pkgVersion}`)

  const inputFiles = await glob(pkgPath + '/**/*.js')

  console.log('bundle ', pkg)
  const service = startService()
  ;(await service).build({
    input: inputFiles,
    format: 'esm',
    outdir: getFolderRoot('npm', `${pkgName}@${pkgVersion}`)
  })
  ;(await service).stop()
}

export async function bundle(pkg, main) {
  const { name: pkgName, version: pkgVersion } = pkg
  await ensureDownload(pkg)

  const pkgPath = getFolderRoot('pkgs', `${pkgName}@${pkgVersion}`)

  // create a bundle
  console.log('bundle ', pkg)
  const service = startService()
  ;(await service).build({
    input: path.join(pkgPath, main || 'index.js'),
    format: 'esm',
    outfile: getFolderRoot('built', `${pkgName}@${pkgVersion}`, 'esm.js')
  })
  ;(await service).stop()

  return {}
}
