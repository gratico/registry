import { rollup } from 'rollup'
import path from 'path'
import process from 'process'
import glob from 'glob'
import cjsPlugin from '@rollup/plugin-commonjs'

export async function isDownloaded(pkg) {}

export async function download(pkg) {}

export async function build(pkg) {
  const { name: pkgName, version: pkgVersion } = pkg

  const pkgPath = path.join(process.cwd(), 'public', 'pkgs', `${pkgName}@${pkgVersion}`)

  const inputOptions = {
    input: glob.sync(pkgPath + '/**/*.js'),
    plugins: cjsPlugin(),
    treeshake: false
  }
  const outputOptions = {
    preserveModules: true,
    dir: path.join(process.cwd(), 'public', 'npm', `${pkgName}@${pkgVersion}`),
    format: 'esm'
  }
  // create a bundle

  const bundle = await rollup(inputOptions)
  const { output } = await bundle.generate(outputOptions)
  console.log(output)
  await bundle.write(outputOptions)

  // closes the bundle
  await bundle.close()
  return output
}

export async function bundle(pkg) {
  const { name: pkgName, version: pkgVersion, main } = pkg

  const pkgPath = path.join(process.cwd(), 'public', 'pkgs', `${pkgName}@${pkgVersion}`)

  const inputOptions = {
    input: path.join(pkgPath, main),
    plugins: cjsPlugin(),
    treeshake: false
  }
  const outputOptions = {
    preserveModules: true,
    file: path.join(process.cwd(), 'public', 'built', `${pkgName}@${pkgVersion}`, 'esm.js'),
    format: 'esm'
  }
  // create a bundle

  const bundle = await rollup(inputOptions)
  const { output } = await bundle.generate(outputOptions)
  console.log(output)
  await bundle.write(outputOptions)

  // closes the bundle
  await bundle.close()
  return output
}
