import { rollup } from 'rollup'
import path from 'path'
import process from 'process'
import glob from 'glob'
import cjsPlugin from '@rollup/plugin-commonjs'
import { spawnChild } from './process.js'
import fs from 'fs'
import { promisify } from 'util'

export function getFolderRoot(...paths) {
  if (process.env.NPM_ROOT) {
    const p = path.join(...[process.env.NPM_ROOT, ...(paths || [])])

    return p
  } else {
    return path.join(...[process.cwd(), 'public', ...(paths || [])])
  }
}

export async function isDownloaded(pkg) {
  const pkgPath = getFolderRoot('pkgs', pkg.name + '@' + pkg.version, 'package.json')
  try {
    const resp = await promisify(fs.stat)(pkgPath)
    return !!resp
  } catch (e) {
    return false
  }
}

export async function download(pkg) {
  await spawnChild('make', ['download-package'], {
    env: {
      PATH: process.env.PATH,
      NPM_PACKAGE_NAME: pkg.name,
      NPM_PACKAGE_VERSION: pkg.version,
      ROOT_DIR: getFolderRoot()
    }
  })
}

export async function ensureDownload(pkg) {
  const exists = await isDownloaded(pkg)
  if (exists) return
  return download(pkg)
}

export async function build(pkg) {
  const { name: pkgName, version: pkgVersion } = pkg
  await ensureDownload(pkg)

  const pkgPath = getFolderRoot('pkgs', `${pkgName}@${pkgVersion}`)

  const inputOptions = {
    input: glob.sync(pkgPath + '/**/*.js'),
    plugins: cjsPlugin(),
    treeshake: false
  }
  const outputOptions = {
    preserveModules: true,
    dir: getFolderRoot('npm', `${pkgName}@${pkgVersion}`),
    format: 'esm'
  }
  // create a bundle

  const bundle = await rollup(inputOptions)
  const { output } = await bundle.generate(outputOptions)
  await bundle.write(outputOptions)

  // closes the bundle
  await bundle.close()
  return outputOptions
}

export async function bundle(pkg, main) {
  const { name: pkgName, version: pkgVersion } = pkg
  await ensureDownload(pkg)
  console.log('m', main)

  const pkgPath = getFolderRoot('pkgs', `${pkgName}@${pkgVersion}`)

  const inputOptions = {
    input: path.join(pkgPath, main),
    plugins: cjsPlugin(),
    treeshake: false
  }
  const outputOptions = {
    preserveModules: true,
    file: getFolderRoot('built', `${pkgName}@${pkgVersion}`, 'esm.js'),
    format: 'esm'
  }
  // create a bundle

  const bundle = await rollup(inputOptions)
  const { output } = await bundle.generate(outputOptions)
  await bundle.write(outputOptions)

  // closes the bundle
  await bundle.close()
  return outputOptions
}
