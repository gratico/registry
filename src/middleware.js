import validateNPMPackageName from 'validate-npm-package-name'
import url from 'url'

const URLFormat = /^\/((?:@[^\/@]+\/)?[^\/@]+)(?:@([^\/]+))?(\/.*)?$/

export function packageURLMiddleware(req, res, next) {
  const { pathname, search, query } = url.parse(req.url, true)

  if (pathname.slice(0, 4) !== '/npm') return next()

  const parts = pathname.slice(5).split('/')
  console.log('p', parts)
  if (!parts || parts.length < 2) return next()

  const [first, second, third] = parts
  let packageName = first
  let packageVersion = second
  if (first[0] === '@') {
    packageName = first + '/' + second
    packageVersion = third
  }

  req.packageName = packageName
  req.packageVersion = packageVersion
  req.packageSlug = `${packageName}@${packageVersion}`
  req.pathname = pathname
  next()
}

function tryDecode(param) {
  if (param) {
    try {
      return decodeURIComponent(param)
    } catch (error) {}
  }

  return ''
}
