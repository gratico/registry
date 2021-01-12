import { getFolderRoot, ensureDownload } from './utils.js'
import esbuild from 'esbuild'
import glob from 'glob'
import path from 'path'
import { promisify } from 'util'

const { startService } = esbuild
;(async () => {
  try {
    const pkg = {
      name: process.env.NPM_PACKAGE_NAME,
      version: process.env.NPM_PACKAGE_VERSION,
      main: process.env.NPM_PACKAGE_MAIN
    }
    const service = await startService()
    await build(pkg, service)
    await bundle(pkg, pkg.main, service)
    await service.stop()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()

export async function build(pkg, service) {
  const { name: pkgName, version: pkgVersion } = pkg
  await ensureDownload(pkg)

  const pkgPath = getFolderRoot('pkgs', `${pkgName}@${pkgVersion}`)

  const inputFiles = await promisify(glob)(pkgPath + '/**/*.js')

  console.log('bundle ', pkg, pkgPath, inputFiles)
  const resp = await service.build({
    entryPoints: inputFiles,
    format: 'esm',
    platform: 'node',
    outdir: getFolderRoot('npm', `${pkgName}@${pkgVersion}`)
  })
  console.log('r', resp)
}

export async function bundle(pkg, main, service) {
  const { name: pkgName, version: pkgVersion } = pkg
  await ensureDownload(pkg)

  const pkgPath = getFolderRoot('pkgs', `${pkgName}@${pkgVersion}`)

  // create a bundle
  console.log('bundle ', pkg)
  await service.build({
    entryPoints: [path.join(pkgPath, main || 'index.js')],
    format: 'esm',
    bundle: true,
    sourcemap: true,
    platform: 'node',
    outfile: getFolderRoot('built', `${pkgName}@${pkgVersion}`, 'esm.js')
  })

  return {}
}
