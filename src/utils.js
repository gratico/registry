import { rollup } from 'rollup'
import path from 'path'
import process from 'process'
import glob from 'glob'

import { spawnChild } from './process.js'
import fs from 'fs'
import { promisify } from 'util'
import logicalTree from 'npm-logical-tree'
import async from 'async'
import crawl from 'tree-crawl'

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

export async function forkAndBuild(pkg) {
  const exists = await isDownloaded(pkg)
  if (!exists) {
    await forkAndDownload(pkg)
  }
  const pkgPath = getFolderRoot('pkgs', pkg.name + '@' + pkg.version, 'package.json')
  const output = await promisify(fs.readFile)(pkgPath, 'utf8')
  const manifest = JSON.parse(output)
  if (!exists) {
    const resp = await spawnChild('make', ['build-package'], {
      env: {
        NPM_ROOT: process.env.NPM_ROOT,
        PATH: process.env.PATH,
        NPM_PACKAGE_NAME: pkg.name,
        NPM_PACKAGE_VERSION: pkg.version,
        NPM_PACKAGE_MAIN: manifest.module || manifest.main,
        ROOT_DIR: getFolderRoot()
      }
    })
    console.log(resp)
  }
}
export async function forkAndDownload(pkg) {
  await spawnChild('make', ['download-package'], {
    env: {
      NPM_ROOT: process.env.NPM_ROOT,
      PATH: process.env.PATH,
      NPM_PACKAGE_NAME: pkg.name,
      NPM_PACKAGE_VERSION: pkg.version,
      ROOT_DIR: getFolderRoot()
    }
  })
}

export function getFlattenedTree(lTree) {
  const nodes = []
  console.log(lTree)
  crawl(
    lTree,
    (node) => {
      if (node.address !== '') {
        nodes.push({
          name: node.name,
          version: node.version
        })
      }
    },
    {
      getChildren: (node) => {
        return node.dependencies ? [...node.dependencies.values()] : []
      }
    }
  )
  return nodes
}

export async function install(job) {
  const { manifest, lockfile } = job
  const lTree = logicalTree(manifest, lockfile)
  const nodes = getFlattenedTree(lTree)
  console.log(nodes.length)
  const tasks = nodes.map((pkg, i) => {
    return async (cb) => {
      console.log('building i', i)
      try {
        await forkAndBuild(pkg)
      } catch (e) {
        console.error(e)
      }
    }
  })
  const resp = await async.parallelLimit(tasks, 10)
  console.log('r', resp)
  return resp
}

export async function ensureDownload(pkg) {
  const exists = await isDownloaded(pkg)
  if (exists) return
  return forkAndDownload(pkg)
}
